const get_extender_type = (id_tool, hole, fin_len, crossover = 0) => {
	if (hole == "uphole") {
		var hole_list = DATASET.tool.find(el => el.id === id_tool).id_uphole
		var maybe_ext = DATASET.extender.type.uphole
		var linked_ext = []
		var final_ext = []

		for (var i = 0; i < hole_list.length; i++) {
			var tool = DATASET.extender.type.uphole.find(el => el.id === hole_list[i])
			linked_ext.push(tool)

			// if user give value to crossover, then it should
			// assigned to extender that require_crossover.
			// so if crossover dont have value, and the iterated extender
			// is require crossover value, then skip to next extender.
			if (crossover < 1 && tool.require_crossover) {
				continue
			}

			if (tool.tolerance > 0 && (fin_len-tool.max)*(fin_len-tool.tolerance)<=0) {
				tool.isExt = true
				final_ext.push(tool)
			}
			
			if ((fin_len-tool.min)*(fin_len-tool.max)<=0) {
				tool.isExt = false
				final_ext.push(tool)
			}
		}
		return {"final_ext": final_ext, "linked_ext": linked_ext}

	}else if (hole == "downhole") {
		var hole_list = DATASET.tool.find(el => el.id === id_tool).id_downhole
		var maybe_ext = DATASET.extender.type.downhole
		var linked_ext = []
		var final_ext = []

		for (var i = 0; i < hole_list.length; i++) {
			var tool = DATASET.extender.type.downhole.find(el => el.id === hole_list[i])
			linked_ext.push(tool)

			// if user give value to crossover, then it should
			// assigned to extender that require_crossover.
			// so if crossover dont have value, and the iterated extender
			// is require crossover value, then skip to next extender.
			if (crossover < 1 && tool.require_crossover) {
				continue
			}

			if (tool.tolerance > 0 && (fin_len-tool.max)*(fin_len-tool.tolerance)<=0) {
				tool.isExt = true
				final_ext.push(tool)
			}

			if ((fin_len-tool.min)*(fin_len-tool.max)<=0) {
				tool.isExt = false
				final_ext.push(tool)
			}
		}
		return {"final_ext": final_ext, "linked_ext": linked_ext}
	}
}


/* ADN 4 */
const adn4_downhole_box = (rop2usc, crossover) => {
	var fin_len = rop2usc-8.435+crossover-10.435
	var ext_type = get_extender_type(1, "downhole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}


/*ECOSCOPE*/
const ecoscope_uphole_box = (rop2usc, crossover) => {
	if (crossover == 0) {
		var fin_len = rop2usc-215
	}else{
		var fin_len = rop2usc-216.678+crossover-1.838
	}
	var ext_type = get_extender_type(5, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const ecoscope_uphole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-216.678+crossover+3.257
	var ext_type = get_extender_type(5, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const ecoscope_downhole_box = (rop2usc) => {
	var fin_len = rop2usc-53.125-1.678
	var ext_type = get_extender_type(5, "downhole", fin_len)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const ecoscope_downhole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-53.125+crossover+3.4
	var ext_type = get_extender_type(5, "downhole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}


/* ARC 6 */
const arc6_uphole_box = (rop2usc, crossover) => {
	if (crossover == 0) {
		var fin_len = rop2usc-73.0625
	}else{
		var fin_len = rop2usc-74.74+crossover-1.838
	}
	var ext_type = get_extender_type(2, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const arc6_uphole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-74.74+crossover+3.257
	var ext_type = get_extender_type(2, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const arc6_downhole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-110.15+crossover+3.4
	var ext_type = get_extender_type(2, "downhole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const arc6_downhole_box = (rop2usc) => {
	var fin_len = rop2usc-110.15-1.678
	var ext_type = get_extender_type(2, "downhole", fin_len)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

/* ARC 8 */
const arc8_uphole_box = (rop2usc, crossover) => {
	if (crossover == 0) {
		var fin_len = rop2usc-73.288
	}else{
		var fin_len = rop2usc-74.966+crossover-1.838
	}
	var ext_type = get_extender_type(3, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const arc8_uphole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-74.966+crossover+3.257
	var ext_type = get_extender_type(3, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const arc8_downhole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-110.19+crossover+3.417
	var ext_type = get_extender_type(3, "downhole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const arc8_downhole_box = (rop2usc) => {
	var fin_len = rop2usc-110.19-1.678
	var ext_type = get_extender_type(3, "downhole", fin_len)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

/* ARC 9 */
const arc9_uphole_box = (rop2usc, crossover) => {
	if (crossover == 0) {
		var fin_len = rop2usc-73.288
	}else{
		var fin_len = rop2usc-74.966+crossover-1.838
	}
	var ext_type = get_extender_type(4, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const arc9_uphole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-74.966+crossover+3.257
	var ext_type = get_extender_type(4, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const arc9_downhole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-110.19+crossover+3.417
	var ext_type = get_extender_type(4, "downhole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const arc9_downhole_box = (rop2usc) => {
	var fin_len = rop2usc-110.19-1.678
	var ext_type = get_extender_type(4, "downhole", fin_len)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

/* SONICSCOPE 675 */
const sonicscope675_uphole_box = (rop2usc, crossover) => {
	if (crossover == 0) {
		var fin_len = rop2usc-99.178
	}else{
		var fin_len = rop2usc-97.5+crossover-1.838
	}
	var ext_type = get_extender_type(16, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const sonicscope675_uphole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-97.5+crossover+3.257
	var ext_type = get_extender_type(16, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const sonicscope675_downhole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-61.955+crossover+3.4
	var ext_type = get_extender_type(16, "downhole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const sonicscope675_downhole_box = (rop2usc) => {
	var fin_len = rop2usc-61.955-1.678
	var ext_type = get_extender_type(16, "downhole", fin_len)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

/* TELESCOPE IWOB */
const telescope_iwob_uphole_box = (rop2usc, crossover) => {
	var fin_len = rop2usc-227.25+crossover-1.838
	var ext_type = get_extender_type(17, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const telescope_iwob_uphole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-227.25+crossover+3.257
	var ext_type = get_extender_type(17, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const telescope_iwob_downhole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-44.25+crossover+3.4
	var ext_type = get_extender_type(17, "downhole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const telescope_iwob_downhole_box = (rop2usc) => {
	var fin_len = rop2usc-44.25-1.678
	var ext_type = get_extender_type(17, "downhole", fin_len)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

/* TELESCOPE NON-IWOB */
const telescope_non_iwob_uphole_box = (rop2usc, crossover) => {
	var fin_len = rop2usc-227.25+crossover-1.838
	var ext_type = get_extender_type(18, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const telescope_non_iwob_uphole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-227.25+crossover+3.257
	var ext_type = get_extender_type(18, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const telescope_non_iwob_downhole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-20.25+crossover+3.4
	var ext_type = get_extender_type(18, "downhole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const telescope_non_iwob_downhole_box = (rop2usc) => {
	var fin_len = rop2usc-20.25-1.678
	var ext_type = get_extender_type(18, "downhole", fin_len)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

/* GYROPULSE */
const gyropulse_uphole_box = (rop2usc, crossover) => {
	var fin_len = rop2usc-221.71+crossover-1.838
	var ext_type = get_extender_type(8, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const gyropulse_uphole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-221.71+crossover+3.257
	var ext_type = get_extender_type(8, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const gyropulse_downhole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-20.25+crossover+3.417
	var ext_type = get_extender_type(8, "downhole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const gyropulse_downhole_box = (rop2usc) => {
	var fin_len = rop2usc-20.25-1.678
	var ext_type = get_extender_type(8, "downhole", fin_len)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}


/* VPWD */
const vpwd_uphole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-117.125+crossover+1.25
	var ext_type = get_extender_type(19, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const vpwd_downhole_box = (rop2usc) => {
	var fin_len = rop2usc-16
	var ext_type = get_extender_type(19, "downhole", fin_len)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}


/* IMPULSE */
const impulse_uphole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-124.125+crossover+1.25
	var ext_type = get_extender_type(9, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const impulse_downhole_box = (rop2usc, crossover) => {
	if (crossover == 0) {
		var fin_len = rop2usc-98.25
	}else{
		var fin_len = rop2usc+crossover-98.25
	}
	var ext_type = get_extender_type(9, "downhole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}



/* GEOSPHERE RECEIVER */
const geosphere_receiver_uphole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-98.25+crossover+1.25
	var ext_type = get_extender_type(7, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const geosphere_receiver_downhole_box = (rop2usc, crossover) => {
	if (crossover == 0) {
		var fin_len = rop2usc-84.875
	}else{
		var fin_len = rop2usc-82.875+crossover-2
	}
	var ext_type = get_extender_type(7, "downhole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}


/* GEOSPHERE TRANSMITTER */
const geosphere_transmitter_uphole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-133.75+crossover+1.25
	var ext_type = get_extender_type(6, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const geosphere_transmitter_downhole_box = (rop2usc, crossover) => {
	if (crossover == 0) {
		var fin_len = rop2usc-40.125
	}else{
		var fin_len = rop2usc-40.125+crossover-2
	}
	var ext_type = get_extender_type(6, "downhole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}


/* MICROSCOPE 675 */
const microscope675_uphole_box = (rop2usc, crossover) => {
	if (crossover == 0) {
		var fin_len = rop2usc-57.9875-1.678
	}else{
		var fin_len = rop2usc-57.9875-1.678+crossover
	}
	var ext_type = get_extender_type(11, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const microscope675_uphole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-57.9875+crossover+3.257
	var ext_type = get_extender_type(11, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const microscope675_downhole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-95.5+crossover+3.417
	var ext_type = get_extender_type(11, "downhole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const microscope675_downhole_box = (rop2usc) => {
	var fin_len = rop2usc-95.5-1.678
	var ext_type = get_extender_type(11, "downhole", fin_len)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}


/* OPTIDRILL 675 */
const optidrill675_uphole_box = (rop2usc) => {
	var fin_len = rop2usc-54.375
	var ext_type = get_extender_type(12, "uphole", fin_len)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const optidrill675_downhole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-36.825+crossover+3.4
	var ext_type = get_extender_type(12, "downhole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}


/* OPTIDRILL 900 */
const optidrill900_uphole_box = (rop2usc, crossover) => {
	if (crossover == 0) {
		var fin_len = rop2usc-75.185-1.678
	}else{
		var fin_len = rop2usc-75.185+crossover-1.838
	}
	var ext_type = get_extender_type(13, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const optidrill900_downhole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-31.25+crossover+3.417
	var ext_type = get_extender_type(13, "downhole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}


/* PERISCOPE 475 */
const periscope475_downhole_box = (rop2usc) => {
	var fin_len = rop2usc-145.85
	var ext_type = get_extender_type(15, "downhole", fin_len)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const periscope475_uphole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-105.875+crossover+1.25
	var ext_type = get_extender_type(15, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}


/* MICROSCOPE 475 */
const microscope475_downhole_box = (rop2usc) => {
	var fin_len = rop2usc-102.5625
	var ext_type = get_extender_type(10, "downhole", fin_len)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const microscope475_uphole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-82.1875+crossover+1.25
	var ext_type = get_extender_type(10, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}


/* DIGISCOPE */
const digiscope_uphole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-298.75+crossover+1.25
	var ext_type = get_extender_type(21, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const digiscope_downhole_box = (rop2usc, crossover) => {
	if (crossover == 0) {
		var fin_len = rop2usc-6.3125
	}else{
		var fin_len = rop2usc+crossover-6.3125
	}
	var ext_type = get_extender_type(21, "downhole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}


/* STETHOSCOPE 4 */
const stethoscope4_uphole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-233.25+crossover+1.25
	var ext_type = get_extender_type(22, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const stethoscope4_uphole_box = (rop2usc, crossover) => {
	var fin_len = rop2usc-233.25+crossover-2
	var ext_type = get_extender_type(22, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const stethoscope4_downhole_box = (rop2usc) => {
	var fin_len = rop2usc-216.75
	var ext_type = get_extender_type(22, "downhole", fin_len)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}



/* STETHOSCOPE 6 */
const stethoscope6_downhole_pin = (rop2usc, crossover) => {
	var fin_len = rop2usc-131.75+crossover+3.4
	var ext_type = get_extender_type(23, "downhole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const stethoscope6_downhole_box = (rop2usc) => {
	var fin_len = rop2usc-131.75-1.678
	var ext_type = get_extender_type(23, "downhole", fin_len)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}

const stethoscope6_uphole_box = (rop2usc, crossover) => {
	var fin_len = rop2usc-203.75+crossover-1.838
	var ext_type = get_extender_type(23, "uphole", fin_len, crossover)
	var ret_data = {"extender": ext_type, "fin_len": fin_len}
	return ret_data
}