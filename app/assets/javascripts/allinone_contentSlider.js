(function($) {

	function animate_singular_text(elem) {
		//alert (parseInt(current_obj.current_img_no*options.width));
		elem.animate({
                opacity: 1,
                left: elem.attr('data-final-left')+'px',
                top: elem.attr('data-final-top')+'px'
              }, elem.attr('data-duration')*1000, function() {
                //alert (elem.attr('data-initial-left'));
              });			
	};
    
    
    
    
	function animate_texts(current_obj,allinone_contentSlider_the,bannerControls) {
		//alert (current_obj.currentImg.attr('data-text-id'))
		//jQuery(current_obj.currentImg.attr('data-text-id')).css("opacity","1");
		jQuery(current_obj.currentImg.attr('data-text-id')).css("display","block");
		var texts = jQuery(current_obj.currentImg.attr('data-text-id')).children();
		/*jQuery(current_obj.currentImg.attr('data-text-id')).css('width',allinone_contentSlider_the.width()+'px');
		jQuery(current_obj.currentImg.attr('data-text-id')).css('left',bannerControls.css('left'));//alert (allinone_contentSlider_the.width());
		jQuery(current_obj.currentImg.attr('data-text-id')).css('top',bannerControls.css('top'));*/

		var i=0;
		currentText_arr=Array();
		texts.each(function() {
			currentText_arr[i] = jQuery(this);
            //alert (currentText_arr[i].attr('data-initial-left'));
            //currentText_arr[i].css("display","block");
            currentText_arr[i].css("left",currentText_arr[i].attr('data-initial-left')+'px');
            currentText_arr[i].css("top",currentText_arr[i].attr('data-initial-top')+'px'); 
            currentText_arr[i].css("opacity",parseInt(currentText_arr[i].attr('data-fade-start'))/100); 
            
            var currentText=currentText_arr[i];
            setTimeout(function() { animate_singular_text(currentText);}, (currentText_arr[i].attr('data-delay')*1000));    
            	
            i++;
        });		
	};	
	
	
    // navigation
	function allinone_contentSlider_navigation(direction,current_obj,options,total_images,bottomNavButs,imgs,allinone_contentSlider_the,bannerControls,allinone_contentSlider_contentHolder,allinone_contentSlider_container,allinone_contentSlider_playOver){
		var navigateAllowed=true;
		if ((!options.loop && current_obj.current_img_no+direction>=total_images) || (!options.loop && current_obj.current_img_no+direction<0))
			navigateAllowed=false;				
		
		if (navigateAllowed && !current_obj.slideIsRunning) {
			current_obj.slideIsRunning=true;
			current_obj.previous_current_img_no=current_obj.current_img_no;
			//hide previous texts
			//jQuery(current_obj.currentImg.attr('data-text-id')).css('opacity','0');
			jQuery(current_obj.currentImg.attr('data-text-id')).css("display","none");
			
			//deactivate previous
			jQuery(bottomNavButs[current_obj.current_img_no]).removeClass('bottomNavButtonON');
			

			allinone_contentSlider_playOver.css('display','none');				
			
			//set current img
			if (current_obj.current_img_no+direction>=total_images) {
				current_obj.current_img_no=0;
			} else if (current_obj.current_img_no+direction<0) {
				current_obj.current_img_no=total_images-1;
			} else {
				current_obj.current_img_no+=direction;
			}

			
			//alert (direction+' -- '+current_obj.current_img_no+' -- '+total_images)
			//activate current
			jQuery(bottomNavButs[current_obj.current_img_no]).addClass('bottomNavButtonON');
			
			current_obj.currentImg = jQuery(imgs[current_obj.current_img_no]);
		

			allinone_contentSlider_contentHolder.animate({
			    left:(-1)*current_obj.current_img_no*options.width+'px'
			  }, 800, 'easeOutQuad', function() {
			    // Animation complete.
				  current_obj.slideIsRunning=false;
				  
				  if (jQuery(imgs[current_obj.current_img_no]).attr('data-video')=='true')
					allinone_contentSlider_playOver.css('display','block');

				  //reinit content to stop videos
				  if (jQuery(imgs[current_obj.previous_current_img_no]).attr('data-video')=='true')
				  		jQuery('#contentHolderUnit_'+current_obj.previous_current_img_no, allinone_contentSlider_container).html(jQuery(imgs[current_obj.previous_current_img_no]).html());
				  
				  animate_texts(current_obj,allinone_contentSlider_the,bannerControls);
					
				  if (options.autoPlay>0 && total_images>1 && !current_obj.mouseOverBanner) {
					  clearTimeout(current_obj.timeoutID);
					  current_obj.timeoutID=setTimeout(function(){ allinone_contentSlider_navigation(1,current_obj,options,total_images,bottomNavButs,imgs,allinone_contentSlider_the,bannerControls,allinone_contentSlider_contentHolder,allinone_contentSlider_container,allinone_contentSlider_playOver)},options.autoPlay*1000);
				  }						  
			});					
			//alert (current_obj.current_img_no)

			
		} // if navigateAllowed
		
	};
	
	

	
	$.fn.allinone_contentSlider = function(options) {

		var options = $.extend({},$.fn.allinone_contentSlider.defaults, options);

		return this.each(function() {
			var allinone_contentSlider_the = jQuery(this);
			
			//the controllers
			var allinone_contentSlider_wrap = jQuery('<div></div>').addClass('allinone_contentSlider').addClass(options.skin);
			var bannerControls = jQuery('<div class="bannerControls">   <div class="leftNav"></div>   <div class="rightNav"></div>    </div>  <div class="contentHolderVisibleWrapper"><div class="contentHolder"></div></div>   <div class="playOver"></div>');
			allinone_contentSlider_the.wrap(allinone_contentSlider_wrap);
			allinone_contentSlider_the.after(bannerControls);
			

			
			//the elements
			var allinone_contentSlider_container = allinone_contentSlider_the.parent('.allinone_contentSlider');
			var bannerControls = jQuery('.bannerControls', allinone_contentSlider_container);
			
			
			var allinone_contentSlider_contentHolderVisibleWrapper = jQuery('.contentHolderVisibleWrapper', allinone_contentSlider_container);
			var allinone_contentSlider_contentHolder = jQuery('.contentHolder', allinone_contentSlider_container);			
			
			
			var bottomNavLeft_aux=jQuery('<div class="bottomNavLeft"></div>');
			var bottomNav_aux=jQuery('<div class="bottomNav"></div>');
			var bottomNavRight_aux=jQuery('<div class="bottomNavRight"></div>');
			
			allinone_contentSlider_the.after(bottomNavLeft_aux);
			allinone_contentSlider_the.after(bottomNav_aux);
			allinone_contentSlider_the.after(bottomNavRight_aux);
			 
			if (!options.showAllControllers)
				bannerControls.css("display","none");			
			
			
			var allinone_contentSlider_leftNav = jQuery('.leftNav', allinone_contentSlider_container);
			var allinone_contentSlider_rightNav = jQuery('.rightNav', allinone_contentSlider_container);
			allinone_contentSlider_leftNav.css("display","none");
			allinone_contentSlider_rightNav.css("display","none");			
			if (options.showNavArrows) {
				if (options.showOnInitNavArrows) {
					allinone_contentSlider_leftNav.css("display","block");
					allinone_contentSlider_rightNav.css("display","block");
				}
			}
			
			var allinone_contentSlider_bottomNav = jQuery('.bottomNav', allinone_contentSlider_container);
			var allinone_contentSlider_bottomNavLeft = jQuery('.bottomNavLeft', allinone_contentSlider_container);
			var allinone_contentSlider_bottomNavRight = jQuery('.bottomNavRight', allinone_contentSlider_container);
			var allinone_contentSlider_bottomOverThumb;
			allinone_contentSlider_bottomNav.css("display","block");
			allinone_contentSlider_bottomNavLeft.css("display","block");
			allinone_contentSlider_bottomNavRight.css("display","block");
			if (!options.showBottomNav) {
				allinone_contentSlider_bottomNav.css("display","none");
				allinone_contentSlider_bottomNavLeft.css("display","none");
				allinone_contentSlider_bottomNavRight.css("display","none");
			}
			if (!options.showOnInitBottomNav) {
				allinone_contentSlider_bottomNav.css("left","-5000px");
				allinone_contentSlider_bottomNavLeft.css("left","-5000px");
				allinone_contentSlider_bottomNavRight.css("left","-5000px");				
			}
			
			
			
			if (options.enableTouchScreen) {
				allinone_contentSlider_contentHolder.css('cursor','url(skins/hand.cur),url(skins/hand.cur),move');
				allinone_contentSlider_container.css('cursor','url(skins/hand.cur),url(skins/hand.cur),move');
				allinone_contentSlider_contentHolder.css('left','0');
				allinone_contentSlider_contentHolder.draggable({ 
					axis: 'x',
					distance:10,
					start: function(event, ui) {
						origLeft=parseInt(jQuery(this).css('left'));
						allinone_contentSlider_playOver.css('display','none');
					},
					stop: function(event, ui) {
						if (!current_obj.slideIsRunning) {
							finalLeft=parseInt(jQuery(this).css('left'));
							direction=1;
							//alert (origLeft+ ' < '+finalLeft);
							if (origLeft<finalLeft) {
								direction=-1;
							}	
							allinone_contentSlider_navigation(direction,current_obj,options,total_images,bottomNavButs,imgs,allinone_contentSlider_the,bannerControls,allinone_contentSlider_contentHolder,allinone_contentSlider_container,allinone_contentSlider_playOver);
						}
					}
				});
		
			}
			
			
			
			
			//the vars
			
			var allinone_contentSlider_playOver=jQuery('.playOver', allinone_contentSlider_container);
			allinone_contentSlider_playOver.css('left',parseInt((options.width-allinone_contentSlider_playOver.width())/2)+'px');
			allinone_contentSlider_playOver.css('top',parseInt((options.height-allinone_contentSlider_playOver.height())/2)+'px');			
			
			var total_images=0;
			var current_obj = {
					current_img_no:0,
					currentImg:0,
					previous_current_img_no:0,
					slideIsRunning:false,
					mouseOverBanner:false,
					isVideoPlaying:false,
					timeoutID:''
				};				

			//var current_obj.timeoutID; // the autoplay timeout ID
			
			
			var i = 0;

			
			//set banner size
			allinone_contentSlider_container.width(options.width);
			allinone_contentSlider_container.height(options.height);
			
			allinone_contentSlider_contentHolderVisibleWrapper.width(options.width);
			allinone_contentSlider_contentHolderVisibleWrapper.height(options.height);
			
			allinone_contentSlider_contentHolder.width(options.width);//initial width
			allinone_contentSlider_contentHolder.height(options.height);
			
			//bannerControls.width('100%');
			//bannerControls.height('100%');
			bannerControls.css('margin-top',parseInt((options.height-allinone_contentSlider_leftNav.height())/2)+'px');
			
			//get images
			var theul=allinone_contentSlider_the.find('ul:first');
			//alert (theul.attr("title"));
			
			var imgs = theul.children();
			var contentHolderUnit;
			var holderWidth=0;
			var bottomNavBut;
			var bottomNavWidth=0;
			var bottomNavMarginTop=0;			
			imgs.each(function() {
	            current_obj.currentImg = jQuery(this);
	            if(!current_obj.currentImg.is('li')){
	            	current_obj.currentImg = current_obj.currentImg.find('li:first');
	            }
	            
	            //alert (current_obj.currentImg.attr('title'))
	            	
	            if(current_obj.currentImg.is('li')){
	            	total_images++;
	            	//'+current_obj.currentImg.html()+'
	            	contentHolderUnit = jQuery('<div class="contentHolderUnit" rel="'+ (total_images-1) +'" id="contentHolderUnit_'+ (total_images-1) +'">'+current_obj.currentImg.html()+'</div>');
	            	contentHolderUnit.width(options.width);
	            	contentHolderUnit.height(options.height);
	            	allinone_contentSlider_contentHolder.append(contentHolderUnit);
	            	holderWidth=holderWidth+options.width;
	            	//alert (holderWidth);
	            	
		            //generate bottomNav
		            bottomNavBut = jQuery('<div class="bottomNavButtonOFF" rel="'+ (total_images-1) +'"></div>');
		            allinone_contentSlider_bottomNav.append(bottomNavBut);
		            
		            
		            bottomNavWidth+=parseInt(bottomNavBut.css('padding-left').substring(0, bottomNavBut.css('padding-left').length-2))+bottomNavBut.width();
		            bottomNavMarginTop=parseInt((allinone_contentSlider_bottomNav.height()-parseInt(bottomNavBut.css('height').substring(0, bottomNavBut.css('height').length-2)))/2);
		            //alert (bottomNavMarginTop);
		            bottomNavBut.css('margin-top',bottomNavMarginTop+'px');
		            
		            allinone_contentSlider_contentHolder.append(jQuery(current_obj.currentImg.attr('data-text-id')));
		    		jQuery(current_obj.currentImg.attr('data-text-id')).css('width',allinone_contentSlider_the.width()+'px');
		    		jQuery(current_obj.currentImg.attr('data-text-id')).css('left',parseInt((total_images-1)*options.width));//alert (allinone_contentSlider_the.width());
		    		jQuery(current_obj.currentImg.attr('data-text-id')).css('top',bannerControls.css('top'));		            
	            }	            

	        });		
			//bottomNavWidth+=parseInt(bottomNavBut.css('padding-left').substring(0, bottomNavBut.css('padding-left').length-2));
			allinone_contentSlider_contentHolder.width(holderWidth);
			//alert (holderWidth)
			
			allinone_contentSlider_bottomNav.width(bottomNavWidth);
			if (options.showOnInitBottomNav) {
				allinone_contentSlider_bottomNav.css("left",parseInt((allinone_contentSlider_container.width()-bottomNavWidth)/2)+'px');
				allinone_contentSlider_bottomNavLeft.css("left",parseInt(allinone_contentSlider_bottomNav.css('left').substring(0, allinone_contentSlider_bottomNav.css('left').length-2))-allinone_contentSlider_bottomNavLeft.width()+'px');
				allinone_contentSlider_bottomNavRight.css("left",parseInt(allinone_contentSlider_bottomNav.css('left').substring(0, allinone_contentSlider_bottomNav.css('left').length-2))+allinone_contentSlider_bottomNav.width()+parseInt(bottomNavBut.css('padding-left').substring(0, bottomNavBut.css('padding-left').length-2))+'px');
			}	
			//for youtube iframes
			jQuery("iframe").each(function(){
			      var ifr_source = jQuery(this).attr('src');
			      var wmode = "?wmode=transparent";
			      jQuery(this).attr('src',ifr_source+wmode);
			});
			
			
	        //initialize first number image
			current_obj.current_img_no=0;			
	        
	        
			current_obj.currentImg = jQuery(imgs[0]);
	        //generate the text for first image
			animate_texts(current_obj,allinone_contentSlider_the,bannerControls);
	        
	        

			
/*
	        //Event when Animation finishes
			allinone_contentSlider_container.bind('effectComplete', function(){
				current_obj.slideIsRunning=false;
				
				
				//alert (current_obj.currentImg.attr('data-text-id'));
				animate_texts(current_obj,allinone_contentSlider_the,bannerControls);
				
				if (options.autoPlay>0 && total_images>1 && !current_obj.mouseOverBanner) {
					clearTimeout(current_obj.timeoutID);
					current_obj.timeoutID=setTimeout(function(){ allinone_contentSlider_navigation(1,current_obj,options,total_images,bottomNavButs,imgs,allinone_contentSlider_the,bannerControls,allinone_contentSlider_contentHolder,allinone_contentSlider_container,allinone_contentSlider_playOver)},options.autoPlay*1000);
				}				
	        }); //bind
*/			
			

			
			//pause on hover
			allinone_contentSlider_container.mouseenter(function() {
				current_obj.mouseOverBanner=true;
				clearTimeout(current_obj.timeoutID);
				if (options.autoHideNavArrows && options.showNavArrows) {
					allinone_contentSlider_leftNav.css("display","block");
					allinone_contentSlider_rightNav.css("display","block");
				}
				if (options.autoHideBottomNav && options.showBottomNav) {
					allinone_contentSlider_bottomNav.css("display","block");
					allinone_contentSlider_bottomNav.css("left",parseInt((allinone_contentSlider_container.width()-bottomNavWidth)/2)+'px');
					
					allinone_contentSlider_bottomNavLeft.css("display","block");
					allinone_contentSlider_bottomNavLeft.css("left",parseInt(allinone_contentSlider_bottomNav.css('left').substring(0, allinone_contentSlider_bottomNav.css('left').length-2))-allinone_contentSlider_bottomNavLeft.width()+'px');
					
					allinone_contentSlider_bottomNavRight.css("display","block");
					allinone_contentSlider_bottomNavRight.css("left",parseInt(allinone_contentSlider_bottomNav.css('left').substring(0, allinone_contentSlider_bottomNav.css('left').length-2))+allinone_contentSlider_bottomNav.width()+parseInt(bottomNavBut.css('padding-left').substring(0, bottomNavBut.css('padding-left').length-2))+'px');
					
				}				
			});
			
			allinone_contentSlider_container.mouseleave(function() {
				current_obj.mouseOverBanner=false;
				if (options.autoHideNavArrows && options.showNavArrows) {
					allinone_contentSlider_leftNav.css("display","none");
					allinone_contentSlider_rightNav.css("display","none");
				}
				if (options.autoHideBottomNav && options.showBottomNav) {
					allinone_contentSlider_bottomNav.css("display","none");
					allinone_contentSlider_bottomNavLeft.css("display","none");
					allinone_contentSlider_bottomNavRight.css("display","none");
				}				
				if (options.autoPlay>0 && total_images>1 && !current_obj.isVideoPlaying) {
					clearTimeout(current_obj.timeoutID);
					current_obj.timeoutID=setTimeout(function(){ allinone_contentSlider_navigation(1,current_obj,options,total_images,bottomNavButs,imgs,allinone_contentSlider_the,bannerControls,allinone_contentSlider_contentHolder,allinone_contentSlider_container,allinone_contentSlider_playOver)},options.autoPlay*1000);
				}
			});
			
			/*//a href
			allinone_contentSlider_container.click(function() {
				alert("a");
			
			});*/
			
			
			var contentHolderUnit=jQuery('.contentHolderUnit', allinone_contentSlider_contentHolder);
			contentHolderUnit.click(function() {
				var i=jQuery(this).attr('rel');
                if (jQuery(imgs[current_obj.current_img_no]).attr('data-video')=='true') {
					
					if (i!=current_obj.current_img_no) {
						current_obj.isVideoPlaying=false;
					} else {
						clearTimeout(current_obj.timeoutID);	
						//allinone_carousel_playOver.css('display','none');						
						imgInside = jQuery(this).find('img:first');
						imgInside.css('display','none');
						allinone_contentSlider_playOver.css('display','none');
						current_obj.isVideoPlaying=true;
					}
				}
				
				if (jQuery(imgs[current_obj.current_img_no]).attr('data-link')!=undefined && i==current_obj.current_img_no && jQuery(imgs[current_obj.current_img_no]).attr('data-link')!='') {
					var cur_target=options.target;
					if (jQuery(imgs[current_obj.current_img_no]).attr('data-target')!=undefined && jQuery(imgs[current_obj.current_img_no]).attr('data-target')!=''){
						cur_target=jQuery(imgs[current_obj.current_img_no]).attr('data-target');
					}
					
					if (cur_target=="_blank")
						window.open(jQuery(imgs[current_obj.current_img_no]).attr('data-link'));
					else
						window.location = jQuery(imgs[current_obj.current_img_no]).attr('data-link');
				}				
			});
			
			allinone_contentSlider_playOver.click(function() {
				allinone_contentSlider_playOver.css('display','none');						
				clearTimeout(current_obj.timeoutID);	
				imgInside = jQuery('#contentHolderUnit_'+current_obj.current_img_no, allinone_contentSlider_container).find('img:first');
				imgInside.css('display','none');
				current_obj.isVideoPlaying=true;	
			});			
			
			
			
			//controllers
			allinone_contentSlider_leftNav.click(function() {
				if (!current_obj.slideIsRunning) {
					current_obj.isVideoPlaying=false;
					clearTimeout(current_obj.timeoutID);
					allinone_contentSlider_navigation(-1,current_obj,options,total_images,bottomNavButs,imgs,allinone_contentSlider_the,bannerControls,allinone_contentSlider_contentHolder,allinone_contentSlider_container,allinone_contentSlider_playOver);
				}
			});
			allinone_contentSlider_rightNav.click(function() {
				if (!current_obj.slideIsRunning) {
					current_obj.isVideoPlaying=false;
					clearTimeout(current_obj.timeoutID);
					allinone_contentSlider_navigation(1,current_obj,options,total_images,bottomNavButs,imgs,allinone_contentSlider_the,bannerControls,allinone_contentSlider_contentHolder,allinone_contentSlider_container,allinone_contentSlider_playOver);
				}
			});
			
			
			
			
			
			//bottom nav
			var bottomNavButs=jQuery('.bottomNavButtonOFF', allinone_contentSlider_container);
			bottomNavButs.click(function() {
				if (!current_obj.slideIsRunning) {
					current_obj.isVideoPlaying=false;
					
					var currentBut=jQuery(this);
					var i=currentBut.attr('rel');
					//deactivate previous 
					jQuery(bottomNavButs[current_obj.current_img_no]).removeClass('bottomNavButtonON');
					current_obj.previous_current_img_no=current_obj.current_img_no;
					//reinit content to stop videos
					jQuery('#contentHolderUnit_'+current_obj.previous_current_img_no, allinone_contentSlider_container).html(jQuery(imgs[current_obj.previous_current_img_no]).html());
					

					current_obj.current_img_no=i-1;
					allinone_contentSlider_navigation(1,current_obj,options,total_images,bottomNavButs,imgs,allinone_contentSlider_the,bannerControls,allinone_contentSlider_contentHolder,allinone_contentSlider_container,allinone_contentSlider_playOver);
					
					//alert (i+'  --  '+current_obj.current_img_no+'  --  '+total_images);
				}
			});
			
			bottomNavButs.mouseenter(function() {
				var currentBut=jQuery(this);
				var i=currentBut.attr('rel');
				
				
				if (options.showPreviewThumbs) {
					allinone_contentSlider_bottomOverThumb = jQuery('<div class="bottomOverThumb"></div>');
					currentBut.append(allinone_contentSlider_bottomOverThumb);
					var image_name=jQuery(imgs[i]).attr('data-bottom-thumb');
					allinone_contentSlider_bottomOverThumb.html('<img src="'+ image_name + '">');
				}
				
				currentBut.addClass('bottomNavButtonON');
			});
			
			bottomNavButs.mouseleave(function() {
				var currentBut=jQuery(this);
				var i=currentBut.attr('rel');

				if (options.showPreviewThumbs) {
					allinone_contentSlider_bottomOverThumb.remove();
				}				
				
				if (current_obj.current_img_no!=i)
					currentBut.removeClass('bottomNavButtonON');
			});			
			


			//first start autoplay
			jQuery(bottomNavButs[current_obj.current_img_no]).addClass('bottomNavButtonON');
			if (options.autoPlay>0 && total_images>1) {
				current_obj.timeoutID=setTimeout(function(){ allinone_contentSlider_navigation(1,current_obj,options,total_images,bottomNavButs,imgs,allinone_contentSlider_the,bannerControls,allinone_contentSlider_contentHolder,allinone_contentSlider_container,allinone_contentSlider_playOver)},options.autoPlay*1000);
			}

			if (jQuery(imgs[current_obj.current_img_no]).attr('data-video')=='true')
				allinone_contentSlider_playOver.css('display','block');
				
			
			
		});
	};

	
	//
	// plugin skins
	//
	$.fn.allinone_contentSlider.defaults = {
			skin: 'imposing',
			width:918,
			height:382,
			autoPlay:7,
			loop:true,
			target:"_blank", //_blank/_self
			showAllControllers:true,
			showNavArrows:true,
			showOnInitNavArrows:true, // o1
			autoHideNavArrows:true, // o1
			showBottomNav:true,
			showOnInitBottomNav:true, // o2
			autoHideBottomNav:true, // o2
			showPreviewThumbs:true,
			enableTouchScreen:true
			
	};

})(jQuery);
