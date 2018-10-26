// import { Utils } from "handlebars";
import { Alert } from 'react-native';

export default netUtil = {
      getListData:(url,option,CallBack)=>{
        fetch(url,option).then(res=>{
            let resData = res["_bodyInit"];
            return resData;
          }).then(response=>{
            CallBack(response);
          }).catch(err=>{
            Alert.alert("err",err);
          })
        }
}