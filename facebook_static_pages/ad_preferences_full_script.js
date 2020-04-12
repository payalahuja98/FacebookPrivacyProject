var interestsHeader = document.getElementById("custom_interests_header");
interestsHeader.onclick = function() {
	toggleOpenClose("custom_interests");
}

var interactedHeader = document.getElementById("custom_interacted_header");
interactedHeader.onclick = function() {
	toggleOpenClose("custom_interacted");
}

var yourinfoHeader = document.getElementById("custom_yourinfo_header");
yourinfoHeader.onclick = function() {
	toggleOpenClose("custom_yourinfo");
}

var settingsHeader = document.getElementById("custom_settings_header");
settingsHeader.onclick = function() {
	toggleOpenClose("custom_settings");
}

var hidetopicsHeader = document.getElementById("custom_hidetopics_header");
hidetopicsHeader.onclick = function() {
	toggleOpenClose("custom_hidetopics");
}

var recentAdActivityHeader = document.getElementById("custom_recentadactivity_header");
recentAdActivityHeader.onclick = function() {
	toggleOpenClose("custom_recentadactivity");
}

var adLibraryHeader = document.getElementById("custom_ad_library_header");
adLibraryHeader.onclick = function() {
	toggleOpenClose("custom_ad_library");
}

function toggleOpenClose(prefix) {
	var closeText = document.getElementById(prefix + "_close_text");
	var iconsDiv = document.getElementById(prefix + "_icons_div");
	var openIcon = document.getElementById(prefix + "_open_icon");
	var closeIcon = document.getElementById(prefix + "_close_icon");
	var content = document.getElementById(prefix + "_content");

	if(closeText.classList.contains("hidden_elem")) {
		closeText.classList.remove("hidden_elem");
		iconsDiv.classList.remove("_2qof");
		openIcon.classList.add("hidden_elem");
		closeIcon.classList.remove("hidden_elem");
		content.classList.remove("hidden_elem");
	} else {
		closeText.classList.add("hidden_elem");
		iconsDiv.classList.add("_2qof");
		openIcon.classList.remove("hidden_elem");
		closeIcon.classList.add("hidden_elem");
		content.classList.add("hidden_elem")
	}
}


var seeMoreInterestsText = document.getElementById("custom_content_see_more");
seeMoreInterestsText.onclick = function() {
	showMoreInterests();
}

var collapseInterestsText = document.getElementById("custom_content_collapse_list");
collapseInterestsText.onclick = function() {
	collapseList();
}

function showMoreInterests() {
	var customInterestsList = document.getElementById("custom_content_list");
	var children = customInterestsList.children;

	var childrenChanged = 0;
	var reachedFinalIndex = true;
	for(var i = 0; i < children.length; i++) {
		var childItem = children[i];
		if (childItem.classList.contains("hidden_elem")) {
			childItem.classList.remove("hidden_elem");
			childrenChanged += 1;
		}

		if (childrenChanged >= 10) {
			reachedFinalIndex = false;
			break;
		}
	}

	if(reachedFinalIndex === true) {
		seeMoreInterestsText.classList.add("hidden_elem");
		collapseInterestsText.classList.remove("hidden_elem");
	}
}

function collapseList() {
	var customInterestsList = document.getElementById("custom_content_list");
	var children = customInterestsList.children;

	for(var i = 10; i < children.length; i++) {
		var childItem = children[i];
		childItem.classList.add("hidden_elem");
	}

	seeMoreInterestsText.classList.remove("hidden_elem");
	collapseInterestsText.classList.add("hidden_elem");
}

addRemoveInterestClickHandlers();

function addRemoveInterestClickHandlers() {
	var customInterestsList = document.getElementById("custom_content_list");
	var children = customInterestsList.children;

	for(var i = 0; i < children.length; i++) {
		var childItem = children[i];
		var removeImage = childItem.getElementsByTagName("img")[0];
		removeImage.onclick = function() {
			this.parentNode.parentNode.removeChild(this.parentNode);
		}
	}
}

