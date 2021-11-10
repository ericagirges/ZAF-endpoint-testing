$(function() {
    var client = ZAFClient.init();
    client.invoke('resize', { width: '500px', height: '400px' });
  });