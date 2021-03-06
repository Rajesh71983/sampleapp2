/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

   
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

	$(document).ready(function(){
	
			$( "#dialog2" ).dialog({
             modal: true,
             autoOpen: false,
             title: "New Version Available",
             width: 350,
             height: 200,
			 my: "center",
			 at: "center",
			 of: window,
			 
               buttons: {
                  INSTALL: function() {
					//navigator.app.exitApp();
					$(this).dialog('close');
					window.location = 'https://build.phonegap.com/apps/2858415/download/ios/?qr_key=cuTgg_bFze4yfgV8THyn';
					
                }
               }
            });	
			
			var version = '1.1'; 

			  self.setInterval(function(){ getLatestVersionDetails(); },30000);  // 5 mins
			  
			  function getLatestVersionDetails()
			  {
						$.ajax({
							 type: "POST",
							 url: "http://96.81.195.252:8090/getversion.php",
							 data:{version:version},
							 dataType : 'json',
							 cache: false,
							 success: function(data){
								 console.log(data); 
								 if(data.newversionavailable == 1 ){
									
									//$('#dialog2').html("Update Available");				 
									$('#dialog2').dialog('open');
								 }
							 }
						 });		
				 
			   }
		
	});
