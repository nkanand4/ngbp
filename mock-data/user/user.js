/**
 * Created by nitesh on 3/17/15.
 */
angular.module('emsui')
.config(function($provide) {
  $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
})
.run(function($httpBackend) {
  var users = [{"id":1,"firstname":"Scott","lastname":"Arbaugh","department":"QA","mobile":"512-843-0895","home":"512-535-2389","office":"512-728-2753"},{"id":2,"firstname":"Kevin","lastname":"Calman","department":"Development","mobile":"724-619-1188","home":"512-219-1069","office":"512-513-6025"},{"id":3,"firstname":"Doug","lastname":"Driggers","department":"Development","mobile":"210-289-2316","home":" ","office":"513-5875"},{"id":4,"firstname":"Darren","lastname":"Eastman","department":"PDM - AlertFind","mobile":"512-569-7739","home":" ","office":"723-8212"},{"id":5,"firstname":" Nish","lastname":" Garg","department":" Development","mobile":" 512-553-6006","home":" 512-659-9413","office":" "},{"id":6,"firstname":"Piyush","lastname":"Gupta","department":"L3","mobile":"512-656-8427","home":" ","office":"723-2644"},{"id":7,"firstname":"Toni","lastname":"Guckert","department":"Development","mobile":"512-657-7489","home":" 512-288-6558","office":" "},{"id":8,"firstname":"Corey","lastname":"Horton","department":"Development","mobile":"512-970-1321","home":"394-1101","office":"513-5899"},{"id":9,"firstname":"Padmini ","lastname":"Janakiraman","department":"QA ","mobile":"512 554 7786","home":" ","office":" "},{"id":10,"firstname":"Clint","lastname":"Johnson","department":"QA","mobile":"512.571.9392","home":" ","office":" "},{"id":11,"firstname":"Grant","lastname":"Jones","department":"L3","mobile":"512-694-7991","home":" ","office":" "},{"id":12,"firstname":"David","lastname":"Kassa","department":"Development","mobile":"608-886-7109","home":" ","office":"608-203-2778"},{"id":13,"firstname":"Charles","lastname":"Katili","department":"Development","mobile":"832-545-5294","home":"512-906-2573","office":"513-5730"},{"id":14,"firstname":"Ankit","lastname":"Kaushik","department":"QA","mobile":" 512-705-6396","home":" ","office":" "},{"id":15,"firstname":"Monee","lastname":"Kumar","department":"Development","mobile":"512-788-4076","home":"512-368-2821","office":"728-3842"},{"id":16,"firstname":"Santosh","lastname":"Kumar","department":"L3","mobile":"512-771-6158","home":" ","office":" "},{"id":17,"firstname":"Lev","lastname":"Krystal","department":"Development","mobile":"480-242-5831","home":" ","office":" "},{"id":18,"firstname":"Colton","lastname":"Lee","department":"QA Dev","mobile":"512-743-2994","home":" ","office":" "},{"id":19,"firstname":"Diane","lastname":"Lee","department":"Development","mobile":"512-535-8221","home":" ","office":" "},{"id":20,"firstname":"Robert","lastname":"Lee","department":"Development","mobile":"512-698-5756","home":" ","office":" "},{"id":21,"firstname":"David","lastname":"Lemon","department":"Development","mobile":"512-431-2984","home":" ","office":"513-6126"},{"id":22,"firstname":"Lavernita","lastname":"Martin","department":"QA","mobile":" 512-466-3260","home":" 512-246-6466","office":" "},{"id":23,"firstname":"Jon","lastname":"Matousek","department":"Development","mobile":"425-246-8257","home":" ","office":"513-5919"},{"id":24,"firstname":"Allen","lastname":"McKnight","department":"QA","mobile":"713-412-0038","home":" ","office":" "},{"id":25,"firstname":"Keith","lastname":"Neuse","department":"Development","mobile":"512-809-3583","home":" ","office":" "},{"id":26,"firstname":"Jackie","lastname":"Powers","department":"Development","mobile":"630-464-8856","home":" ","office":" "},{"id":27,"firstname":"Christina ","lastname":"Rios","department":"QA ","mobile":"440-382-4848 ","home":" ","office":" "},{"id":28,"firstname":"Chris","lastname":"Scharff","department":"Development ","mobile":"512-560-2984","home":" ","office":"723-9343"},{"id":29,"firstname":"Jason","lastname":"Schonberg","department":"Development","mobile":" ","home":"512-250-0104","office":" "},{"id":30,"firstname":"Mark","lastname":"Scott","department":"Development","mobile":"512-789-0381","home":" ","office":"512-513-5945"},{"id":31,"firstname":"Ryan","lastname":"Sopko","department":"QA","mobile":"512-289-4487","home":"512-258-2592","office":" "},{"id":32,"firstname":"Vivek","lastname":"Srivastava","department":"QA/Dev","mobile":"512-426-4085","home":" 512-853-9123","office":" "},{"id":33,"firstname":"Aparna","lastname":"Sundar","department":"L3","mobile":"512-568-9992","home":" ","office":" "},{"id":34,"firstname":"Doug ","lastname":"Tucker","department":"Development ","mobile":"931-446-1553 ","home":" ","office":" "},{"id":35,"firstname":"Robert","lastname":"Tulloh","department":"Development","mobile":"512-657-5059","home":"512-258-6005","office":"513-5963"},{"id":36,"firstname":"Ankush","lastname":"Tyagi","department":"QA Dev","mobile":" ","home":" ","office":" "},{"id":37,"firstname":"Rick","lastname":"Vestal","department":"Development","mobile":"512-431-3549","home":"512-267-9418","office":"513-5924"},{"id":38,"firstname":"Fumin","lastname":"Wang","department":"QA Dev","mobile":"480-330-7248","home":" ","office":" "},{"id":39,"firstname":"Malavika","lastname":"Yuvaraj","department":"Development","mobile":"936-245-0444","home":" ","office":" "},{"id":40,"firstname":"Saurabh","lastname":"Agarwal","department":"QA India","mobile":"+91-9811705083 ","home":" ","office":" "}];

  // returns the current list of phones
  $httpBackend.whenGET(/\/user\/get\/[0-9]/).respond(function(method, url, data) {
    var id = url.replace(/\/user\/get/, '');
    id = id.replace(/^\/|\/$/g, '');
    id = parseInt(id, 10) - 1;
    console.log(data);
    if(id < users.length) {
      return [200, users[id], {header: 'more-info'}];
    }else {
      return [404];
    }
  });

  $httpBackend.whenGET(/\/user\/getByFirst\/[a-zA-Z]+/).respond(function(method, url, data) {
    var name = url.replace(/\/user\/getByFirst/, '');
    var filtered;
    name = name.replace(/^\/|\/$/g, '');
    filtered = _.filter(users, {firstname: name});
    if(filtered.length > 0) {
      return [200, filtered, {header: 'more-info'}];
    }else {
      return [404];
    }
  });

});