import React from 'react';
import { SearchBar } from 'react-native-elements';

interface Bar {
  placeholder?: string;
  containerStyle?: object;
  inputContainerStyle?: object;
  onBlur?: () => void;
  onChangeText?: () => void;
  onFocus?: () => void;
  value?: any;
  platform?: any;
  onClear?: () => void;
  loadingProps?: any;
  clearIcon?: any;
  searchIcon?: any;
  showLoading?: any;
  onCancel?: ()=>void;
  cancelButtonTitle?: any;
  cancelButtonProps?: any;
  showCancel?: any;
  lightTheme?: any;
  round?: any;
}

const SearchBarX = (props: Bar) => {
  return <SearchBar placeholder={props.placeholder} containerStyle={props.containerStyle} inputContainerStyle={props.inputContainerStyle} onBlur={props.onBlur ? props.onBlur : () => { }} onChangeText={props.onChangeText ? props.onChangeText : () => { }} onFocus={props.onFocus ? props.onFocus : () => { }} value={props.value} platform={props.platform} onClear={props.onClear ? props.onClear : () => { }} loadingProps={props.loadingProps} clearIcon={props.clearIcon} searchIcon={props.searchIcon} showLoading={props.showLoading} onCancel={props.onCancel ? props.onCancel : () => { }} cancelButtonTitle={props.cancelButtonTitle} cancelButtonProps={props.cancelButtonProps} showCancel={props.showCancel} lightTheme={props.lightTheme} round={props.round} />;
};

export default SearchBarX;
