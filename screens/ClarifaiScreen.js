import { Constants, Camera, FileSystem, Permissions, BarCodeScanner } from 'expo';
import React from 'react';

import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Slider,
  Image,
  Platform
} from 'react-native';
import isIPhoneX from 'react-native-is-iphonex';
import axios from 'axios'

import {
  Ionicons,
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
  Octicons
} from '@expo/vector-icons';

import { RangaText } from '../components/StyledText';

const PHOTOS_DIR = FileSystem.documentDirectory

const landmarkSize = 2;

const flashModeOrder = {
  off: 'on',
  on: 'auto',
  auto: 'torch',
  torch: 'off',
};

const flashIcons = {
  off: 'flash-off',
  on: 'flash-on',
  auto: 'flash-auto',
  torch: 'highlight'
};

const wbOrder = {
  auto: 'sunny',
  sunny: 'cloudy',
  cloudy: 'shadow',
  shadow: 'fluorescent',
  fluorescent: 'incandescent',
  incandescent: 'auto',
};

const wbIcons = {
  auto: 'wb-auto',
  sunny: 'wb-sunny',
  cloudy: 'wb-cloudy',
  shadow: 'beach-access',
  fluorescent: 'wb-iridescent',
  incandescent: 'wb-incandescent',
};

export default class CameraScreen extends React.Component {
  state = {
    flash: 'off',
    zoom: 0,
    autoFocus: 'on',
    type: 'back',
    whiteBalance: 'auto',
    ratio: '16:9',
    ratios: [],
    barcodeScanning: false,
    faceDetecting: false,
    faces: [],
    newPhotos: false,
    permissionsGranted: false,
    pictureSize: undefined,
    pictureSizes: [],
    pictureSizeId: 0,
    showGallery: false,
    showMoreOptions: false,
    isLoading: false,
    isNoMural: false,
    isCameraFunctionsDisplayed: true
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ permissionsGranted: status === 'granted' });
  }

  componentDidMount() {
    // create a directory for images to be saved to
    FileSystem.makeDirectoryAsync(PHOTOS_DIR + 'photos').catch(e => {
      console.log(e, 'Directory exists');
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      FileSystem.makeDirectoryAsync(PHOTOS_DIR + 'photos').catch(e => {
        console.log(e, 'Directory exists');
      });
    }
  }

  getRatios = async () => {
    const ratios = await this.camera.getSupportedRatios();
    return ratios;
  };

  toggleView = () => this.setState({ showGallery: !this.state.showGallery, newPhotos: false });

  toggleMoreOptions = () => this.setState({ showMoreOptions: !this.state.showMoreOptions });

  toggleFacing = () => this.setState({ type: this.state.type === 'back' ? 'front' : 'back' });

  toggleFlash = () => this.setState({ flash: flashModeOrder[this.state.flash] });

  setRatio = ratio => this.setState({ ratio });

  toggleWB = () => this.setState({ whiteBalance: wbOrder[this.state.whiteBalance] });

  toggleFocus = () => this.setState({ autoFocus: this.state.autoFocus === 'on' ? 'off' : 'on' });

  zoomOut = () => this.setState({ zoom: this.state.zoom - 0.1 < 0 ? 0 : this.state.zoom - 0.1 });

  zoomIn = () => this.setState({ zoom: this.state.zoom + 0.1 > 1 ? 1 : this.state.zoom + 0.1 });

  setFocusDepth = depth => this.setState({ depth });

  toggleBarcodeScanning = () => this.setState({ barcodeScanning: !this.state.barcodeScanning });

  toggleFaceDetection = () => this.setState({ faceDetecting: !this.state.faceDetecting });

  // take picture event, this will initiate the entire image analysis workflow
  takePicture = () => {
    console.log('TAKE PICTURE')

    // dummy mural filetype
    let asset = require('../assets/images/AudreyKawasaki.jpg')

    // some dummy urls for testing
    let mural = 'http://powwowhawaii.com/wp-content/uploads/2016/03/pwh2016-Audrey-Kawasaki.jpg'
    let s3url = 'https://s3-us-west-2.amazonaws.com/powwow123/AudreyKawasaki.jpg'
    let orange = 'http://pngimg.com/uploads/orange/orange_PNG780.png'
    let apple = 'http://pngimg.com/uploads/apple/apple_PNG12437.png'

    // check whether there's a camera reference
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved })
        .then(data => {
        });
    }
  }

  handleMountError = ({ message }) => console.error(message);

  onPictureSaved = async (photo) => {
    await FileSystem.moveAsync({
      from: photo.uri,
      to: `${PHOTOS_DIR}photos/test.jpg`,
    });

    // configure 'formData' for s3 upload
    let localUri = `${PHOTOS_DIR}photos/test.jpg`
    let filename = photo.uri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Upload the image using the FormData API
    let formData = new FormData();

    // LOG FORM DATA
    console.log('***** LOG FORM DATA *****')
    console.log(formData)

    // dummy url image for testing
    // let mural = 'http://powwowhawaii.com/wp-content/uploads/2016/03/pwh2016-Audrey-Kawasaki.jpg'

    // "image" is the name of the form field the server expects
    formData.append('image', { uri: localUri, name: filename, type });

    this.setState({ isLoading: true })
    this.setState({ isCameraFunctionsDisplayed: false });

    axios
      .post('http://34.213.121.74:9000/image-upload', formData)
      .then((response) => {

        let highestDetectedValue = 0;
        let highestDetectedId;

        for (let i = 0; i < response.data.concepts.length; i++) {
          if (highestDetectedValue < response.data.concepts[i].value) {
            highestDetectedValue = response.data.concepts[i].value;
            highestDetectedId = parseInt(response.data.concepts[i].name.replace(/[^0-9]/g, ''), 10);
          }
        }

        // DATA LOGGING FROM CLARIFAI
        console.log('*****DATA LOGGING FROM CLARIFAI*****')
        console.log('FRONT END POST RESPONSE: ', response.data)
        console.log('Destructured respose data from first indexed data object: ', response.data.concepts[0].value);
        console.log('highestDetectedId, appended to concept in clarifai: ', parseFloat(highestDetectedId))
        console.log('this.isLoading: ', this.isLoading)

        // LOGIC FOR DETAIL PAGE REDIRECT
        // this will need to be tweaked when we figure out how to get more substantial data from clarifai.
        if (highestDetectedValue > .001) {
          this.props.navigation.navigate('Scroll', {
            artistId: highestDetectedId,
            artistName: 'Audrey Kawasaki'
          })
          this.setState({ isLoading: false });
          this.setState({ isCameraFunctionsDisplayed: true });
        } else {
          this.setState({ isNoMural: true });
          this.setState({ isLoading: false });
          setTimeout(
            function () {
              this.setState({ isNoMural: false });
              this.setState({ isCameraFunctionsDisplayed: true });
            }
              .bind(this),
            3000
          );
        }
      })
      .catch((err) => {
        console.log('ERROR:', err)
      })
    this.setState({ newPhotos: true });
  }

  // SOME CAMERA TEMPLATE CODE, this is unused currently
  onBarCodeScanned = code => {
    this.setState(
      { barcodeScanning: !this.state.barcodeScanning },
      Alert.alert(`Barcode found: ${code.data}`)
    );
  };

  onFacesDetected = ({ faces }) => this.setState({ faces });
  onFaceDetectionError = state => console.warn('Faces detection error:', state);

  collectPictureSizes = async () => {
    if (this.camera) {
      const pictureSizes = await this.camera.getAvailablePictureSizesAsync(this.state.ratio);
      let pictureSizeId = 0;
      if (Platform.OS === 'ios') {
        pictureSizeId = pictureSizes.indexOf('High');
      } else {
        // returned array is sorted in ascending order - default size is the largest one
        pictureSizeId = pictureSizes.length - 1;
      }
      this.setState({ pictureSizes, pictureSizeId, pictureSize: pictureSizes[pictureSizeId] });
    }
  };

  previousPictureSize = () => this.changePictureSize(1);
  nextPictureSize = () => this.changePictureSize(-1);

  changePictureSize = direction => {
    let newId = this.state.pictureSizeId + direction;
    const length = this.state.pictureSizes.length;
    if (newId >= length) {
      newId = 0;
    } else if (newId < 0) {
      newId = length - 1;
    }
    this.setState({ pictureSize: this.state.pictureSizes[newId], pictureSizeId: newId });
  }

  renderGallery() {
    return <GalleryScreen onPress={this.toggleView.bind(this)} />;
  }

  renderFace({ bounds, faceID, rollAngle, yawAngle }) {
    return (
      <View
        key={faceID}
        transform={[
          { perspective: 600 },
          { rotateZ: `${rollAngle.toFixed(0)}deg` },
          { rotateY: `${yawAngle.toFixed(0)}deg` },
        ]}
        style={[
          styles.face,
          {
            ...bounds.size,
            left: bounds.origin.x,
            top: bounds.origin.y,
          },
        ]}>
        <Text style={styles.faceText}>ID: {faceID}</Text>
        <Text style={styles.faceText}>rollAngle: {rollAngle.toFixed(0)}</Text>
        <Text style={styles.faceText}>yawAngle: {yawAngle.toFixed(0)}</Text>
      </View>
    );
  }

  renderLandmarksOfFace(face) {
    const renderLandmark = position =>
      position && (
        <View
          style={[
            styles.landmark,
            {
              left: position.x - landmarkSize / 2,
              top: position.y - landmarkSize / 2,
            },
          ]}
        />
      );
    return (
      <View key={`landmarks-${face.faceID}`}>
        {renderLandmark(face.leftEyePosition)}
        {renderLandmark(face.rightEyePosition)}
        {renderLandmark(face.leftEarPosition)}
        {renderLandmark(face.rightEarPosition)}
        {renderLandmark(face.leftCheekPosition)}
        {renderLandmark(face.rightCheekPosition)}
        {renderLandmark(face.leftMouthPosition)}
        {renderLandmark(face.mouthPosition)}
        {renderLandmark(face.rightMouthPosition)}
        {renderLandmark(face.noseBasePosition)}
        {renderLandmark(face.bottomMouthPosition)}
      </View>
    );
  }

  renderFaces = () =>
    <View style={styles.facesContainer} pointerEvents="none">
      {this.state.faces.map(this.renderFace)}
    </View>

  renderLandmarks = () =>
    <View style={styles.facesContainer} pointerEvents="none">
      {this.state.faces.map(this.renderLandmarksOfFace)}
    </View>

  renderNoPermissions = () =>
    <View style={styles.noPermissions}>
      <Text style={{ color: 'white' }}>
        Camera permissions not granted - cannot open camera preview.
      </Text>
    </View>

  renderTopBar = () =>
    <View
      style={styles.topBar}>
      <TouchableOpacity style={styles.toggleButton} onPress={this.toggleFacing}>
        <Ionicons name="ios-reverse-camera" size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.toggleButton} onPress={this.toggleFlash}>
        <MaterialIcons name={flashIcons[this.state.flash]} size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.toggleButton} onPress={this.toggleWB}>
        <MaterialIcons name={wbIcons[this.state.whiteBalance]} size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.toggleButton} onPress={this.toggleFocus}>
        <Text style={[styles.autoFocusLabel, { color: this.state.autoFocus === 'on' ? "white" : "#6b6b6b" }]}>AF</Text>
      </TouchableOpacity>
    </View>

  renderArtistData = () =>
    <View
      style={styles.artistBar}>
      <Text style={styles.artistData}>Detecting Image...</Text>
    </View>

  renderNoImageDetected = () =>
    <View
      style={styles.artistBar}>
      <Text style={styles.noImage}>No Mural Image Detected</Text>
    </View>

  renderBottomBar = () =>
    <View
      style={styles.bottomBar}>
      <TouchableOpacity style={styles.bottomButton} onPress={this.toggleMoreOptions}>
        <Octicons name="kebab-horizontal" size={30} color="white" />
      </TouchableOpacity>
      <View style={{ flex: 0.4 }}>
        <TouchableOpacity
          onPress={this.takePicture}
          style={{ alignSelf: 'center' }}
        >
          <Ionicons name="ios-radio-button-on" size={70} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.bottomButton} onPress={this.toggleView}>
        <View>
          <Foundation name="thumbnails" size={30} color="white" />
          {this.state.newPhotos && <View style={styles.newPhotosDot} />}
        </View>
      </TouchableOpacity>
    </View>

  renderMoreOptions = () =>
    (
      <View style={styles.options}>
        <View style={styles.detectors}>
          <TouchableOpacity onPress={this.toggleFaceDetection}>
            <MaterialIcons name="tag-faces" size={32} color={this.state.faceDetecting ? "white" : "#858585"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleBarcodeScanning}>
            <MaterialCommunityIcons name="barcode-scan" size={32} color={this.state.barcodeScanning ? "white" : "#858585"} />
          </TouchableOpacity>
        </View>

        <View style={styles.pictureSizeContainer}>
          <Text style={styles.pictureQualityLabel}>Picture quality</Text>
          <View style={styles.pictureSizeChooser}>
            <TouchableOpacity onPress={this.previousPictureSize} style={{ padding: 6 }}>
              <Ionicons name="md-arrow-dropleft" size={14} color="white" />
            </TouchableOpacity>
            <View style={styles.pictureSizeLabel}>
              <Text style={{ color: 'white' }}>{this.state.pictureSize}</Text>
            </View>
            <TouchableOpacity onPress={this.nextPictureSize} style={{ padding: 6 }}>
              <Ionicons name="md-arrow-dropright" size={14} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );

  renderCamera = () =>
    (
      <View style={{ flex: 1 }}>
        <Camera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.camera}
          onCameraReady={this.collectPictureSizes}
          type={this.state.type}
          flashMode={this.state.flash}
          autoFocus={this.state.autoFocus}
          zoom={this.state.zoom}
          whiteBalance={this.state.whiteBalance}
          ratio={this.state.ratio}
          pictureSize={this.state.pictureSize}
          onMountError={this.handleMountError}
          onFacesDetected={this.state.faceDetecting ? this.onFacesDetected : undefined}
          onFaceDetectionError={this.onFaceDetectionError}
          barCodeScannerSettings={{
            barCodeTypes: [
              BarCodeScanner.Constants.BarCodeType.qr,
              BarCodeScanner.Constants.BarCodeType.pdf417,
            ],
          }}
          onBarCodeScanned={this.state.barcodeScanning ? this.onBarCodeScanned : undefined}
        // renderArtistData={this.state.isLoading ? this.renderArtistData() : null}
        >
          {this.state.isCameraFunctionsDisplayed && this.renderTopBar()}
          {this.state.isLoading && this.renderArtistData()}
          {this.state.isCameraFunctionsDisplayed && this.renderBottomBar()}
          {this.state.isNoMural && this.renderNoImageDetected()}
        </Camera>
        {this.state.faceDetecting && this.renderFaces()}
        {this.state.faceDetecting && this.renderLandmarks()}
        {this.state.showMoreOptions && this.renderMoreOptions()}
      </View>
    );

  render() {
    const cameraScreenContent = this.state.permissionsGranted
      ? this.renderCamera()
      : this.renderNoPermissions();
    const content = this.state.showGallery ? this.renderGallery() : cameraScreenContent;
    return <View style={styles.container}>{content}</View>;
  }
}

const styles = StyleSheet.create({
  artistData: {
    fontSize: 50,
    color: 'green',
    display: 'flex'
  },
  noImage: {
    fontSize: 50,
    color: 'red',
    display: 'flex'
  },
  artistBar: {
    paddingBottom: isIPhoneX ? 25 : 5,
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    flex: 0.25,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topBar: {
    flex: 0.2,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight / 2,
  },
  bottomBar: {
    paddingBottom: isIPhoneX ? 25 : 5,
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    flex: 0.12,
    flexDirection: 'row',
  },
  noPermissions: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  gallery: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  toggleButton: {
    flex: 0.25,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  autoFocusLabel: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  bottomButton: {
    flex: 0.3,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newPhotosDot: {
    position: 'absolute',
    top: 0,
    right: -5,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4630EB'
  },
  options: {
    position: 'absolute',
    bottom: 80,
    left: 30,
    width: 200,
    height: 160,
    backgroundColor: '#000000BA',
    borderRadius: 4,
    padding: 10,
  },
  detectors: {
    flex: 0.5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  pictureQualityLabel: {
    fontSize: 10,
    marginVertical: 3,
    color: 'white'
  },
  pictureSizeContainer: {
    flex: 0.5,
    alignItems: 'center',
    paddingTop: 10,
  },
  pictureSizeChooser: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  pictureSizeLabel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  facesContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  face: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: 'absolute',
    borderColor: '#FFD700',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  landmark: {
    width: landmarkSize,
    height: landmarkSize,
    position: 'absolute',
    backgroundColor: 'red',
  },
  faceText: {
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
  },
});
