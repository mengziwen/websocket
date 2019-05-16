<template>
  <div class="home">
    <iframe id="iframe" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="100%" height="100%" src="//datav.aliyuncs.com/share/32b104b48daa618dd5ec7e31aaa6f3bf"></iframe>
  </div>
</template>

<script>
// @ is an alias to /src
import Stomp from 'stompjs'
export default {
  name: 'home',
  data(){
    return{
      client: null
    }
  },
  
  methods: {
    onConnected(frame) {
      console.log("Connected: " + frame);
      var topic = "/topic/cockpitUri";
      this.client.subscribe(topic, this.responseCallback, this.onFailed);
    },
    onFailed(frame) {
      console.log("Failed: " + frame);
      this.connect();
    },
    responseCallback(frame) {
      console.log("得到的消息 msg=>" + frame.body);
      document.getElementById('iframe').src=frame.body;
      console.log(frame)
    },
    connect() {
      this.client= Stomp.client("ws://47.105.100.158/rcc-cockpit/websocket")
      var clientid =111;
      var headers = {
        "clientId": clientid,
      };
      this.client.connect(headers, this.onConnected, this.onFailed);
    }
  },
  mounted() {
    this.connect()
  }
}
</script>
<style lang="scss">
.home{
  height: 100%;
  width: 100%
}
</style>
