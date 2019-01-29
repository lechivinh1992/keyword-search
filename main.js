// Loopkup Funtion
function searching() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('reason');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myText");
  li = ul.getElementsByTagName('li');
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
	
  }
}

jQuery().ready(function(){
	jQuery('#reason').click(function(){
		document.getElementById('reason').value=""
		var list = jQuery('#myText li').length
		for(i = 0; i < list; i++){
		var listDisplay = document.getElementsByTagName('li')[i].style
			if(listDisplay.display = "none")
				listDisplay.display = ""
		}
	})
})

// Copy Function
jQuery().ready(function() {
	jQuery('#myText li').click(function() {
	//GET INDEX FORM ID AND TAG NAME
		var index = $(this).index();
		var text = jQuery('#myText li')[index];
		
		// CREAT A RANGE TO Copy
		var range = document.createRange();
		
		// SLECT TEXT
		range.selectNodeContents(text);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);		
		var successful = document.execCommand('copy');
		sel.removeAllRanges();
		var resultBoxPosition = jQuery(text).position();
		//alert(jQuery(text).position().left)
		if(successful){
			//var resultBox = jQuery('#myText li')[index];
			//jQuery(resultBox).addClass('showSuccess');
			//setTimeout(function() {jQuery(resultBox).removeClass("showSuccess");}, 1000);
			//jQuery(resultBox).delay(3000).hide(0);
			
			jQuery('.container').append('<div class="showSuccessV2">复制成功</div>');
			setTimeout(function() {jQuery('.showSuccessV2').addClass('show');}, 100);
			setTimeout(function() {jQuery('.showSuccessV2').remove();}, 1000);
		}
		else{alert("cannot Copy your text");}
	})
	
}); 	

//Change the 
function setActions(){
	jQuery('.active').removeClass('active')
	jQuery(this).addClass('active')
	jQuery('.content').hide()
}
jQuery().ready(function(){
	var contentCount = document.getElementsByClassName('content').length
	jQuery('#reasonMenu').click(function(){
		//if(document.getElementById('reasonMenu').getAttribute('class').includes('active') === false ){alert("Exis")}
		setActions();
		jQuery('#reasonSearch').show()
	})
	
	jQuery('#userMenu').click(function(){
		setActions();
		jQuery('#usersSearch').show()
	})
	
	jQuery('#bookmarksMenu').click(function(){
		setActions();
		jQuery('#bookMarks').show()
	})
	
	jQuery('#emailReplyLoad').click(function(){
		setActions();
		jQuery('#emailReply').show()
	})
	
})
