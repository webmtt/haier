import React from 'react'
import { Switch, withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
// import uPlusApi from '../uPlusApi'
import routes, { RouteWithSubRoutes } from './routes'
import '../assets/style/Base.css'
import uPlusApi from '../uPlusApi'
import { M_TO_BYTES, UPLOAD_FILE_EXCEED_SIZE_MSG } from '../utils/constant'
import { showToast } from '../components/MyToast'

@withRouter
@inject(allStores => ({
  commonStore: allStores.commonStore,
  setScreenshot: value => allStores.feedbackStore.setScreenshot(value)
}))
@observer
class App extends React.Component {

  async componentDidMount() {
    uPlusApi.enableConsoleLog()
    this.init()
    // 添加监听，监听截屏
    uPlusApi.addScreenshotEventListener('screenshot', this.whetherScreenshot)
  }

  // 截屏处理
  whetherScreenshot = (imgInfo) => {
    uPlusApi.printLog({ fn: '监听imgInfo', data: imgInfo })
    // 照片大小超过20M，则不上传
    if (imgInfo && imgInfo.imageSize && imgInfo.imagePath) {
      if (imgInfo.imageSize > M_TO_BYTES) {
        showToast(UPLOAD_FILE_EXCEED_SIZE_MSG)
      } else {
        this.props.setScreenshot(imgInfo.imagePath)
      }
    }
  }

  /* 设置userInfo, deviecInfo */
  async init() {
    this.props.commonStore.getAppInfo()
    this.props.commonStore.getPhoneInfo()
    this.props.commonStore.getNetworkInfo()
    this.props.commonStore.getUserInfo()
  }


  render() {
    return (
      <Switch>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </Switch>
    )
  }
}

export default App
