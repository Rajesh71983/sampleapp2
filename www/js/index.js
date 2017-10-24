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
var version = '1.3'; 

  
  
   


	$(document).ready(function(){
function getLatestVersionDetails()
  {
	  		$.ajax({
				 type: "POST",
				 url: "http://96.81.195.252:8090/getversion.php",
				 data:{version:version},
				 dataType : 'json',
				 cache: false,
				 success: function(data){
					 //console.log(data); 
					 if(data.newversionavailable == 1 ){
						
						//$('#dialog2').html("Update Available");				 
						$('#dialog2').dialog('open');
					 }
				 }
			 });		
	 
   }
$('#dialog2').dialog('open');
self.setInterval(function(){ getLatestVersionDetails(); },30000);  // 5 mins
	
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
		
	});
