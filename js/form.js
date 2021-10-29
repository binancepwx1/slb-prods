const renderTool = () => {
	for (var i = 0; i < DATASET.tool.length; i++) {
		var option = document.createElement("option")
		option.text = DATASET.tool[i].name
		option.value = DATASET.tool[i].id
		option.setAttribute('view', DATASET.tool[i].view)

		document.getElementById("tool_selector").appendChild(option)
	}
}
renderTool()

const renderUpholePin = () => {
	var option = document.createElement("option")
	option.text = "PIN"
	option.value = "pin"

	document.getElementById("up_connection").appendChild(option)
}

const renderUpholeBox = () => {
	var option = document.createElement("option")
	option.text = "BOX"
	option.value = "box"

	document.getElementById("up_connection").appendChild(option)
}

const renderDownholePin = () => {
	var option = document.createElement("option")
	option.text = "PIN"
	option.value = "pin"

	document.getElementById("down_connection").appendChild(option)
}

const renderDownholeBox = () => {
	var option = document.createElement("option")
	option.text = "BOX"
	option.value = "box"

	document.getElementById("down_connection").appendChild(option)
}

const getParamFromFun = (func) => {
	var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg
	var ARGUMENT_NAMES = /([^\s,]+)/g
	var fnStr = func.toString().replace(STRIP_COMMENTS, '')
	var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES)
	if(result === null)
		result = []
	return result
}

const renderHole = (elem) =>  {
	var tool_view = parseInt(elem.getAttribute("view"))
	var tool_id = parseInt(elem.getAttribute("value"))
	document.getElementById("calc_btn").disabled = false

	// exception form for tool FLEX
	if ([32,33,34].includes(tool_id)) {
		// alert("this form flex")
		document.getElementById("common_tool").style.display = "none"
		document.getElementById("flex_form").style.display = "block"

		flex_render(tool_view, tool_id)
	}else{
		document.getElementById("common_tool").style.display = "block"
		document.getElementById("flex_form").style.display = "none"

		common_render(tool_view, tool_id)
	}

}


const flex_render = (tool_view, tool_id) => {	
	// set label in the form
	var tool_data = DATASET.tool.find(el => el.id === tool_id)
	document.querySelectorAll('[for=up_rop2usc]')[0].innerHTML = tool_data.label_form.uphole[0]
	document.querySelectorAll('[for=up_crossover]')[0].innerHTML = tool_data.label_form.uphole[1]

	document.querySelectorAll('[for=down_rop2usc]')[0].innerHTML = tool_data.label_form.downhole[0]
	document.querySelectorAll('[for=down_crossover]')[0].innerHTML = tool_data.label_form.downhole[1]
}


const common_render = (tool_view, tool_id) =>  {
	if (tool_view == 2) {
		document.getElementById("uphole").style.display = "none"
		document.getElementById("downhole").style.display = "block"
		// document.querySelectorAll('[for=up_rop2usc]')[0].innerHTML = "ROP to shoulder collar"
	}else if (tool_view == 1) {
		document.getElementById("uphole").style.display = "block"
		document.getElementById("downhole").style.display = "block"
		// document.querySelectorAll('[for=up_rop2usc]')[0].innerHTML = "HV to shoulder collar"
	}else if (tool_view == 3) {
		document.getElementById("downhole").style.display = "none"
		document.getElementById("uphole").style.display = "block"
		// document.querySelectorAll('[for=up_rop2usc]')[0].innerHTML = "ROP to shoulder collar"
	}else{
		document.getElementById("uphole").style.display = "block"
		document.getElementById("downhole").style.display = "block"
		// document.querySelectorAll('[for=up_rop2usc]')[0].innerHTML = "ROP to shoulder collar"
	}

	// set label in the form
	var tool_data = DATASET.tool.find(el => el.id === tool_id)
	document.querySelectorAll('[for=up_rop2usc]')[0].innerHTML = tool_data.label_form.uphole[0]
	document.querySelectorAll('[for=up_crossover]')[0].innerHTML = tool_data.label_form.uphole[1]

	document.querySelectorAll('[for=down_rop2usc]')[0].innerHTML = tool_data.label_form.downhole[0]
	document.querySelectorAll('[for=down_crossover]')[0].innerHTML = tool_data.label_form.downhole[1]


	if (!isNaN(tool_id)) {
		document.getElementById("calc_btn").disabled = false

		document.getElementById("up_connection").options.length = 0
		document.getElementById("down_connection").options.length = 0

		var isUpholePin = typeof DATASET.tool.find(el => el.id === tool_id).uphole.pin
		var isUpholeBox = typeof DATASET.tool.find(el => el.id === tool_id).uphole.box

		var isDownholePin = typeof DATASET.tool.find(el => el.id === tool_id).downhole.pin
		var isDownholeBox = typeof DATASET.tool.find(el => el.id === tool_id).downhole.box

		if (isUpholePin !== "undefined") {
			renderUpholePin()
		}

		if (isUpholeBox !== "undefined") {
			renderUpholeBox()
		}

		if (isDownholePin !== "undefined") {
			renderDownholePin()
		}

		if (isDownholeBox !== "undefined") {
			renderDownholeBox()
		}
	}else{
		document.getElementById("calc_btn").disabled = true
		return
	}
}

const backAction = () => {
	// document.getElementById("calc_form").reset()
	document.getElementById("form_wrapper").style.display = "block"
	document.getElementById("result_wrapper").style.display = "none"
}

const doCalculate = () => {
	var req = {
	    "id_tool": null,
	    "hole": {
	    	"uphole": {"conn": null, "rop2usc": null, "crossover": null},
	    	"downhole": {"conn": null, "rop2usc": null, "crossover": null}
	    }
	}

	req.id_tool = parseInt(document.getElementById("tool_selector").value)

	// exception for tool FLEX
	if ([32,33,34].includes(req.id_tool)) {
		req.hole.uphole.conn = "box"
		req.hole.uphole.rop2usc = parseFloat(document.getElementById("full_coll").value)
		req.hole.uphole.crossover = parseFloat(document.getElementById("stepid").value)

		req.hole.downhole.conn = "pin"
		req.hole.downhole.rop2usc = parseFloat(document.getElementById("full_coll").value)
		req.hole.downhole.crossover = parseFloat(document.getElementById("stepid").value)
	}else{
		req.hole.uphole.conn = document.getElementById("up_connection").value
		req.hole.uphole.rop2usc = parseFloat(document.getElementById("up_rop2usc").value)
		req.hole.uphole.crossover = parseFloat(document.getElementById("up_crossover").value)

		req.hole.downhole.conn = document.getElementById("down_connection").value
		req.hole.downhole.rop2usc = parseFloat(document.getElementById("down_rop2usc").value)
		req.hole.downhole.crossover = parseFloat(document.getElementById("down_crossover").value)
	}

	// this function added for uphole note
	// for certain tools. regarding the update
	// from latest6 sheet in email on 28 Feb 2020
	uphole_noted_tool = [10, 15, 9, 6, 7, 21, 22, 19]
	if (uphole_noted_tool.includes(req.id_tool)) {
		document.getElementById("uphole_details_note").style.display = "block"
	}else{
		document.getElementById("uphole_details_note").style.display = "none"
	}

	if (req.hole.uphole.conn == "pin") {
		// if (req.hole.uphole.crossover < 1 || isNaN(req.hole.uphole.crossover)) {
		// 	alert("Uphole PIN require Crossover value")
		// 	return
		// }
		var res_uphole = DATASET.tool.find(el => el.id === req.id_tool).uphole.pin(req.hole.uphole.rop2usc, req.hole.uphole.crossover)
	}else if (req.hole.uphole.conn == "box") {
		var res_uphole = DATASET.tool.find(el => el.id === req.id_tool).uphole.box(req.hole.uphole.rop2usc, req.hole.uphole.crossover)
	}

	if (req.hole.downhole.conn == "pin") {
		// if (req.hole.downhole.crossover < 1 || isNaN(req.hole.downhole.crossover)) {
		// 	alert("Downhole PIN require Crossover value")
		// 	return
		// }
		var res_downhole = DATASET.tool.find(el => el.id === req.id_tool).downhole.pin(req.hole.downhole.rop2usc, req.hole.downhole.crossover)
	}else if (req.hole.downhole.conn == "box") {
		var res_downhole = DATASET.tool.find(el => el.id === req.id_tool).downhole.box(req.hole.downhole.rop2usc, req.hole.downhole.crossover)
	}

	console.log(res_uphole, res_downhole)

	// Since ADN 4, Lower Clink 825 doesn't have uphole, so it will hide the uphole result 
	var no_uphole_tool = [1,29]
	if (no_uphole_tool.includes(req.id_tool)) {
		document.getElementById("res_uphole").style.display = "none"
	}else{
		renderResultUphole(req, res_uphole)
		document.getElementById("res_uphole").style.display = "block"
	}

	// Since RSS Receiver doesn't have downhole, so it will hide the uphole result 
	var no_downhole_tool = [26,27,31]
	if (no_downhole_tool.includes(req.id_tool)) {
		document.getElementById("res_downhole").style.display = "none"
	}else{
		renderResultDownhole(req, res_downhole)
		document.getElementById("res_downhole").style.display = "block"
	}

	document.getElementById("form_wrapper").style.display = "none"
	document.getElementById("result_wrapper").style.display = "block"
}


const renderResultUphole = (req, res_uphole) => {
	// Set tool name in result header
	document.getElementById("res_tool_name").innerHTML = DATASET.tool.find(el => el.id === req.id_tool).name

	// Pass requested value in form to table
	document.getElementById("up_res_conn").innerHTML = req.hole.uphole.conn.toUpperCase()
	document.getElementById("up_res_rop2usc").innerHTML = req.hole.uphole.rop2usc
	document.getElementById("up_res_crossover").innerHTML = req.hole.uphole.crossover

	// set label for tablehead details
	var tool_data = DATASET.tool.find(el => el.id === req.id_tool)
	document.getElementById("res_up_label_0").innerHTML = tool_data.label_result.uphole[0]
	document.getElementById("res_up_label_1").innerHTML = tool_data.label_result.uphole[1]

	document.getElementById("res_down_label_0").innerHTML = tool_data.label_result.downhole[0]
	document.getElementById("res_down_label_1").innerHTML = tool_data.label_result.downhole[1]


	// Write final result to result form
	document.getElementById("up_fin_len_res").value = res_uphole.fin_len+" inch"

	// This list will used based on extender result and crossover
	var comment_list = [
		"Extender can be adjusted without crossover added, please check with gauges after installation",
		"Your extender can’t be adjusted, please check collar and crossover length",
		"Your extender can’t be adjusted, please check collar length",
		"Extender can be adjusted, please check with gauges after installation",
		"There is no match extender type with this result"
	]

	// Clearing bootstrap-validation class
	document.getElementById("up_fin_len_res").classList.remove("is-valid")
	document.getElementById("up_fin_len_res").classList.remove("is-invalid")

	// extender not exist, dont care if crossover exist or not
	if (res_uphole.extender.final_ext.length > 0) {
		document.getElementById("up_res_invalid_ext").style.display = "none"
		document.getElementById("up_fin_len_res").classList.add("is-valid")
		document.getElementById("up_linked_wrapper").style.display = "none"
	}else{
		document.getElementById("up_res_invalid_ext").style.display = "block"
		document.getElementById("up_fin_len_res").classList.add("is-invalid")
		document.getElementById("up_linked_wrapper").style.display = "block"
	}

	// extender exist, but check crossover exist or not
	if (res_uphole.extender.final_ext.length > 0 && req.hole.uphole.crossover == 0) {
		var valid_comment = comment_list[0]
	}else if(res_uphole.extender.final_ext.length > 0 && req.hole.uphole.crossover > 0) {
		var valid_comment = comment_list[3]
	}

	// extender not exist, and check crossover exist or not
	if (res_uphole.extender.final_ext.length == 0 && req.hole.uphole.crossover == 0) {
		var invalid_comment = comment_list[2]
	}else if(res_uphole.extender.final_ext.length == 0 && req.hole.uphole.crossover > 0) {
		var invalid_comment = comment_list[1]
	}

	// this comment can be modified later, 
	// if we need to know the result is 
	// below or beyond the limit
	document.getElementById("up_res_invalid_ext_text").innerHTML = comment_list[4] 

	// set selected comment from above to element
	document.getElementById("up_valid_comment").innerHTML = valid_comment
	document.getElementById("up_invalid_comment").innerHTML = invalid_comment

	// clean all list before writing new result
	document.getElementById("up_res_ext_list").innerHTML = ""

	// iterate match extender
	for (var i = 0; i < res_uphole.extender.final_ext.length; i++) {
		var cur_ext = res_uphole.extender.final_ext[i]

		// check if extender are ext 2.5"
		if (cur_ext.isExt) {
			var ext_type_string = cur_ext.name+": min "+cur_ext.min+'", max '+cur_ext.max+'", with ext 2.5"'
		}else{
			var ext_type_string = cur_ext.name+": min "+cur_ext.min+'", max '+cur_ext.max+'"'
		}

		// append the element
		var node = document.createElement("li")
		var textnode = document.createTextNode(ext_type_string)
		node.appendChild(textnode)
		document.getElementById("up_res_ext_list").appendChild(node)
	}

	// clean all list before writing new result
	document.getElementById("up_res_ext_list_linked").innerHTML = ""
	var available_ext_counter = 0

	// iterate available extender
	for (var i = 0; i < res_uphole.extender.linked_ext.length; i++) {
		var cur_ext = res_uphole.extender.linked_ext[i]
		var ext_type_string = cur_ext.name+": min "+cur_ext.min+'", max '+cur_ext.max+'"'

		// append the element
		var node = document.createElement("li")
		var textnode = document.createTextNode(ext_type_string)
		node.appendChild(textnode)
		
		if (req.hole.uphole.crossover > 0) {
			// remove require_crossover=false from list
			if (cur_ext.require_crossover) {
				available_ext_counter++
				document.getElementById("up_res_ext_list_linked").appendChild(node)
			}
		}else{
			// remove require_crossover=true from list
			if (!cur_ext.require_crossover) {
				available_ext_counter++
				document.getElementById("up_res_ext_list_linked").appendChild(node)
			}
		}
	}

	if (available_ext_counter == 0) {
		// append the element
		var node = document.createElement("li")
		var textnode = document.createTextNode("No result. Conflict requirement.")
		node.appendChild(textnode)
		document.getElementById("up_res_ext_list_linked").appendChild(node)
	}
}


const renderResultDownhole = (req, res_downhole) => {
	// Set tool name in result header
	document.getElementById("res_tool_name").innerHTML = DATASET.tool.find(el => el.id === req.id_tool).name

	// Pass requested value in form to table
	document.getElementById("down_res_conn").innerHTML = req.hole.downhole.conn.toUpperCase()
	document.getElementById("down_res_rop2usc").innerHTML = req.hole.downhole.rop2usc
	document.getElementById("down_res_crossover").innerHTML = req.hole.downhole.crossover

	// Write final result to result form
	document.getElementById("down_fin_len_res").value = res_downhole.fin_len+" inch"

	// This list will used based on extender result and crossover
	var comment_list = [
		"Extender can be adjusted without crossover added, please check with gauges after installation",
		"Your extender can’t be adjusted, please check collar and crossover length",
		"Your extender can’t be adjusted, please check collar length",
		"Extender can be adjusted, please check with gauges after installation",
		"There is no match extender type with this result"
	]

	// Clearing bootstrap-validation class
	document.getElementById("down_fin_len_res").classList.remove("is-valid")
	document.getElementById("down_fin_len_res").classList.remove("is-invalid")

	// extender not exist, dont care if crossover exist or not
	if (res_downhole.extender.final_ext.length > 0) {
		document.getElementById("down_res_invalid_ext").style.display = "none"
		document.getElementById("down_fin_len_res").classList.add("is-valid")
		document.getElementById("down_linked_wrapper").style.display = "none"
	}else{
		document.getElementById("down_res_invalid_ext").style.display = "block"
		document.getElementById("down_fin_len_res").classList.add("is-invalid")
		document.getElementById("down_linked_wrapper").style.display = "block"
	}

	// extender exist, but check crossover exist or not
	if (res_downhole.extender.final_ext.length > 0 && req.hole.downhole.crossover == 0) {
		var valid_comment = comment_list[0]
	}else if(res_downhole.extender.final_ext.length > 0 && req.hole.downhole.crossover > 0) {
		var valid_comment = comment_list[3]
	}

	// extender not exist, and check crossover exist or not
	if (res_downhole.extender.final_ext.length == 0 && req.hole.downhole.crossover == 0) {
		var invalid_comment = comment_list[2]
	}else if(res_downhole.extender.final_ext.length == 0 && req.hole.downhole.crossover > 0) {
		var invalid_comment = comment_list[1]
	}

	// this comment can be modified later, 
	// if we need to know the result is 
	// below or beyond the limit
	document.getElementById("down_res_invalid_ext_text").innerHTML = comment_list[4] 

	// set selected comment from above to element
	document.getElementById("down_valid_comment").innerHTML = valid_comment
	document.getElementById("down_invalid_comment").innerHTML = invalid_comment

	// clean all list before writing new result
	document.getElementById("down_res_ext_list").innerHTML = ""

	// iterate match extender
	for (var i = 0; i < res_downhole.extender.final_ext.length; i++) {
		var cur_ext = res_downhole.extender.final_ext[i]

		var node = document.createElement("li")

		// check if extender are ext 2.5"
		if (cur_ext.isExt) {
			var ext_type_string = cur_ext.name+": min "+cur_ext.min+'", max '+cur_ext.max+'", with ext 2.5"'
		}else{
			var ext_type_string = cur_ext.name+": min "+cur_ext.min+'", max '+cur_ext.max+'"'
		}

		// append the element
		var textnode = document.createTextNode(ext_type_string)
		node.appendChild(textnode)
		document.getElementById("down_res_ext_list").appendChild(node)
	}

	// clean all list before writing new result
	document.getElementById("down_res_ext_list_linked").innerHTML = ""
	var available_ext_counter = 0

	// iterate available extender
	for (var i = 0; i < res_downhole.extender.linked_ext.length; i++) {
		var cur_ext = res_downhole.extender.linked_ext[i]
		var ext_type_string = cur_ext.name+": min "+cur_ext.min+'", max '+cur_ext.max+'"'

		// append the element
		var node = document.createElement("li")
		var textnode = document.createTextNode(ext_type_string)
		node.appendChild(textnode)
		
		if (req.hole.downhole.crossover > 0) {
			// remove require_crossover=false from list
			if (cur_ext.require_crossover) {
				available_ext_counter++
				document.getElementById("down_res_ext_list_linked").appendChild(node)
			}
		}else{
			// remove require_crossover=true from list
			if (!cur_ext.require_crossover) {
				available_ext_counter++
				document.getElementById("down_res_ext_list_linked").appendChild(node)
			}
		}
	}

	if (available_ext_counter == 0) {
		// append the element
		var node = document.createElement("li")
		var textnode = document.createTextNode("No result. Conflict requirement.")
		node.appendChild(textnode)
		document.getElementById("down_res_ext_list_linked").appendChild(node)
	}
}


// This function will trigger from button in page 
// But be careful when triggering this function. 
// Because you will need an internet connection
// to download the new version from server.
// So consider this when you are in offshore rig
// or isolated places that dont have an internet connection

const resetSW = () => {
	alert("This will delete local app data. Don't do this if you are in offshore rig or if you don't have an internet connection.")
	var user_resp = confirm("Are you want to delete ?")
	if (!user_resp) {
		return
	}

	// Delete registered ServiceWorker javascript file in devices
	navigator.serviceWorker.getRegistrations().then(function(registrations) {
		for(let registration of registrations) {
			registration.unregister()
		} 
	})

	// Delete all caches that were installed
	caches.delete("calc_schlumberger")

	alert("Local data has been deleted. Connect to internet then refresh the page to download a new version.")
}


const resetForm = () => {
	document.getElementById("calc_form").reset()
}