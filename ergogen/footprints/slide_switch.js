module.exports = {
    params: {
        side: 'F',
        reversible: false,
        closed: { type: 'net', value: undefined },
        com: { type: 'net', value: undefined },
        gnd: { type: 'net', value: "GND" },
        top: { type: 'net', value: "TOP" },
        mid: { type: 'net', value: "MID" },
        bot: { type: 'net', value: "BOT" },
    },
    body: p => {
        const standard_opening = `
        (footprint "slide_switch"
            ${p.at}
            `
            
        const through_holes = `
            (pad "" np_thru_hole circle (at -1.5 0 ${p.r}) (size 0.85 0.85) (drill 0.85) (layers "F&B.Cu" "*.Mask"))
	        (pad "" np_thru_hole circle (at 1.5 0 ${p.r}) (size 0.85 0.85) (drill 0.85) (layers "F&B.Cu" "*.Mask"))
        `

        const front_pads = `
            (pad "1" smd roundrect (at 2.25 1.95 ${p.r}) (size 0.6 1.3) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.bot.str})
            (pad "2" smd roundrect (at -0.75 1.95 ${p.r}) (size 0.6 1.3) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.mid.str})
            (pad "3" smd roundrect (at -2.25 1.95 ${p.r}) (size 0.6 1.3) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.top.str})
            (pad "4" smd roundrect (at -3.675 -1.1 ${p.r}) (size 1.05 0.7) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.gnd.str})
            (pad "4" smd roundrect (at -3.675 1.1 ${p.r}) (size 1.05 0.7) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.gnd.str})
            (pad "4" smd roundrect (at 3.675 -1.1 ${p.r}) (size 1.05 0.7) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.gnd.str})
            (pad "4" smd roundrect (at 3.675 1.1 ${p.r}) (size 1.05 0.7) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.gnd.str})
        `

        const back_pads = `
            (pad "1" smd roundrect (at -2.25 1.95 ${p.r}) (size 0.6 1.3) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.bot.str})
            (pad "2" smd roundrect (at 0.75 1.95 ${p.r}) (size 0.6 1.3) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.mid.str})
            (pad "3" smd roundrect (at 2.25 1.95 ${p.r}) (size 0.6 1.3) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.top.str})
            (pad "4" smd roundrect (at -3.675 -1.1 ${p.r}) (size 1.05 0.7) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.gnd.str})
            (pad "4" smd roundrect (at -3.675 1.1 ${p.r}) (size 1.05 0.7) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.gnd.str})
            (pad "4" smd roundrect (at 3.675 -1.1 ${p.r}) (size 1.05 0.7) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.gnd.str})
            (pad "4" smd roundrect (at 3.675 1.1 ${p.r}) (size 1.05 0.7) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.gnd.str})
        `

        const reversible_elements = `
            (pad "1" smd custom (at -2.5 3.5 ${p.r + 90}) (size 0.3 0.3) (layers "B.Cu" "B.Mask") (zone_connect 2) ${p.bot.str} (thermal_bridge_angle 45) (options (clearance outline) (anchor rect))
                (primitives (gr_poly (pts (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75)) (width 0) (fill yes))))
            (pad "1" smd custom (at 2.25 3.5 ${p.r - 90}) (size 0.3 0.3) (layers "F.Cu" "F.Mask") (zone_connect 2) ${p.bot.str} (thermal_bridge_angle 45) (options (clearance outline) (anchor rect))
                (primitives (gr_poly (pts (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75)) (width 0) (fill yes))))
            (pad "2" smd custom (at -0.5 3.5 ${p.r - 90}) (size 0.3 0.3) (layers "F.Cu" "F.Mask") (zone_connect 2) ${p.mid.str} (thermal_bridge_angle 45) (options (clearance outline) (anchor rect))
                (primitives (gr_poly (pts (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75)) (width 0) (fill yes))))
            (pad "2" smd custom (at 0.25 3.5 ${p.r + 90}) (size 0.3 0.3) (layers "B.Cu" "B.Mask") (zone_connect 2) ${p.mid.str} (thermal_bridge_angle 45) (options (clearance outline) (anchor rect))
                (primitives (gr_poly (pts (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75)) (width 0) (fill yes))))
            (pad "3" smd custom (at -2.5 3.5 ${p.r - 90}) (size 0.3 0.3) (layers "F.Cu" "F.Mask") (zone_connect 2) ${p.top.str} (thermal_bridge_angle 45) (options (clearance outline) (anchor rect))
                (primitives (gr_poly (pts (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75)) (width 0) (fill yes))))
            (pad "3" smd custom (at 2.25 3.5 ${p.r + 90}) (size 0.3 0.3) (layers "B.Cu" "B.Mask") (zone_connect 2) ${p.top.str} (thermal_bridge_angle 45) (options (clearance outline) (anchor rect))
                (primitives (gr_poly (pts (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75)) (width 0) (fill yes))))
            (pad "4" smd custom (at -2.5 4.95 ${p.r + 90}) (size 0.3 0.3) (layers "B.Cu" "B.Mask") (zone_connect 2) ${p.closed.str} (thermal_bridge_angle 45) (options (clearance outline) (anchor rect))
                (primitives (gr_poly (pts (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75)) (width 0) (fill yes))))
            (pad "4" smd custom (at 2.25 4.95 ${p.r - 90}) (size 0.3 0.3) (layers "F.Cu" "F.Mask") (zone_connect 2) ${p.closed.str} (thermal_bridge_angle 45) (options (clearance outline) (anchor rect))
                (primitives (gr_poly (pts (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75)) (width 0) (fill yes))))
            (pad "5" smd custom (at -0.5 4.95 ${p.r - 90}) (size 0.3 0.3) (layers "F.Cu" "F.Mask") (zone_connect 2) ${p.com.str} (thermal_bridge_angle 45) (options (clearance outline) (anchor rect))
                (primitives (gr_poly (pts (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75)) (width 0) (fill yes))))
            (pad "5" smd custom (at 0.25 4.95 ${p.r + 90}) (size 0.3 0.3) (layers "B.Cu" "B.Mask") (zone_connect 2) ${p.com.str} (thermal_bridge_angle 45) (options (clearance outline) (anchor rect))
                (primitives (gr_poly (pts (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75)) (width 0) (fill yes))))
            (pad "6" smd custom (at -2.5 4.95 ${p.r - 90}) (size 0.3 0.3) (layers "F.Cu" "F.Mask") (zone_connect 2) ${p.closed.str} (thermal_bridge_angle 45) (options (clearance outline) (anchor rect))
                (primitives (gr_poly (pts (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75)) (width 0) (fill yes))))
            (pad "6" smd custom (at 2.25 4.95 ${p.r + 90}) (size 0.3 0.3) (layers "B.Cu" "B.Mask") (zone_connect 2) ${p.closed.str} (thermal_bridge_angle 45) (options (clearance outline) (anchor rect))
                (primitives (gr_poly (pts (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75)) (width 0) (fill yes))))
            `

        const standard_closing = `
        )
        `
         
        const traces = `
            (segment (start ${p.eaxy(-2.5, 3.5)}) (end ${p.eaxy(-2.25, 1.95)}) (width 0.2) (layer "B.Cu"))
            (segment (start ${p.eaxy(-2.5, 3.5)}) (end ${p.eaxy(-2.25, 1.95)}) (width 0.2) (layer "F.Cu"))
            (segment (start ${p.eaxy(-0.75, 1.95)}) (end ${p.eaxy(-0.5, 3.5)}) (width 0.2) (layer "F.Cu"))
            (segment (start ${p.eaxy(0.75, 1.95)}) (end ${p.eaxy(0.25, 3.5)}) (width 0.2) (layer "B.Cu"))
            (segment (start ${p.eaxy(2.25, 3.5)}) (end ${p.eaxy(2.25, 1.95)}) (width 0.2) (layer "B.Cu"))
            (segment (start ${p.eaxy(2.25, 3.5)}) (end ${p.eaxy(2.25, 1.95)}) (width 0.2) (layer "F.Cu"))
        `

        let final = standard_opening + through_holes;
        
        if (p.side === "F" || p.reversible) {
            final += front_pads;
        }

        if (p.side === "B" || p.reversible) {
            final += back_pads;
        }

        if (p.reversible) {
            final += reversible_elements;
        }

        final += standard_closing;

        if (p.reversible) {
            final += traces;
        }

        return final;
    }
}
