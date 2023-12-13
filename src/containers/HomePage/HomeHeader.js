import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/logo.png';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';

import { changeLanguageApp } from "../../store/actions"
class HomeHeader extends Component {

  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language)
  }
    render() {
        let language = this.props.language;
        console.log('check language: ',language)
        return (
            <React.Fragment>
            <div className="home-header-container">
                <div className="home-header-content">
                    <div className="left-content">
                    <i class="fas fa-bars"></i>
                    <img className="header-logo" src={logo}/>
                    
                    </div>
                    <div className="center-content">
                    <div className="child-content">
                        <div><b>Chuyên khoa</b></div>
                        <div>Tìm bác sĩ chuyên khoa</div>
                    </div>
                    <div className="child-content">
                        <div><b>Cơ sở y tế</b></div>
                        <div>Chọn bệnh viện phòng khám</div>
                    </div>
                    <div className="child-content">
                        <div><b>Bác sĩ</b></div>
                        <div>Chọn bác sĩ giỏi</div>
                    </div>
                    <div className="child-content">
                        <div><b>Gói khám</b></div>
                        <div>Khám sức khỏe tổng quát</div>
                    </div>
                    </div>
                    <div className="right-content">
                    <div className="support"><i class="fas fa-question-circle">Hỗ trợ</i>
                          <FormattedMessage id="homeheader.support" />
                          </div>
                    <div className={language === LANGUAGES.VI ? 'language-vi active ' : ' language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                    <div className={language === LANGUAGES.EN ? 'language-en active ' : ' language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                    </div>
                </div>
            </div>
            <div className="home-header-banner">
            <div className="content-up">
                <div className="title1">NỀN TẢNG Y TẾ</div>
                <div className="title2">CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
                <div className="search">
                  <i class="fas fa-search"></i>
                        <input type="text" placeholder="Tìm chuyên khoa khám bệnh"/>
                </div>
                </div>
                <div className="content-down">
                  <div className="option">
                    <div className="option-child">
                      <div className="icon-child"><i className="fas fa-hospital"></i></div>
                      <div className="text-child">Khám chuyên khoa</div>
                    </div>
                    <div className="option-child">
                      <div className="icon-child"><i className="fa fa-mobile"></i></div>
                      <div className="text-child">Khám từ xa</div>
                    </div>
                    <div className="option-child">
                      <div className="icon-child"><i className="fas fa-hospital"></i></div>
                      <div className="text-child">Khám tổng quát</div>
                    </div>
                    <div className="option-child">
                      <div className="icon-child"><i className="fa fa-flask"></i></div>
                      <div className="text-child">Xét nghiệm y học</div>
                    </div>
                    <div className="option-child">
                      <div className="icon-child"><i className="fas fa-user-md"></i></div>
                      <div className="text-child">Sức khỏe tinh thần</div>
                    </div>
                    <div className="option-child">
                      <div className="icon-child"><i className="fas fa-briefcase-medical"></i></div>
                      <div className="text-child">Khám nha khoa</div>
                    </div>
                    
                    
                  </div>
                </div>
            </div>
            </React.Fragment>
            
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };

};

const mapDispatchToProps = dispatch => {
    return {
      changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
