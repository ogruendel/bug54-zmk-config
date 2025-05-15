module.exports = {
    params: {
        designator: 'D',
        side: 'B',
        reversible: false,
        from: { type: 'net', value: undefined },
        to: { type: 'net', value: undefined },
    },
    body: p => {
        const standard_opening = `
            (footprint "diode_smd_sod323"
                (layer "${p.reversible ? 'F' : p.side}.Cu")
                ${p.at}
        `
        const front_silk = `
            (fp_line (start -0.211888 -0.004112) (end -0.461888 -0.004112) (stroke (width 0.05) (type solid)) (layer "F.SilkS"))
            (fp_line (start -0.209888 -0.310812) (end -0.209888 0.286088) (stroke (width 0.05) (type solid)) (layer "F.SilkS"))
            (fp_line (start -0.2032 -0.012023) (end 0.221912 0.286088) (stroke (width 0.05) (type solid)) (layer "F.SilkS"))
            (fp_line (start -0.2032 0) (end 0.221912 -0.310812) (stroke (width 0.05) (type solid)) (layer "F.SilkS"))
            (fp_line (start 0.221912 -0.310812) (end 0.221912 0.286088) (stroke (width 0.05) (type solid)) (layer "F.SilkS"))
            (fp_line (start 0.473912 -0.004112) (end 0.223912 -0.004112) (stroke (width 0.05) (type solid)) (layer "F.SilkS"))
        `

        const front_smd_pads = `
            (pad "1" smd roundrect (at -1.1 0 ${p.r}) (size 0.5 0.5) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.25) ${p.to.str})
	        (pad "2" smd roundrect (at 1.1 0 ${p.r}) (size 0.5 0.5) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.25) ${p.from.str})
        `

        const back_silk = `
            (fp_line (start -0.211888 -0.004112) (end -0.461888 -0.004112) (stroke (width 0.05) (type solid)) (layer "B.SilkS"))
            (fp_line (start -0.209888 -0.310812) (end -0.209888 0.286088) (stroke (width 0.05) (type solid)) (layer "B.SilkS"))
            (fp_line (start -0.2032 -0.012023) (end 0.221912 0.286088) (stroke (width 0.05) (type solid)) (layer "B.SilkS"))
            (fp_line (start -0.2032 0) (end 0.221912 -0.310812) (stroke (width 0.05) (type solid)) (layer "B.SilkS"))
            (fp_line (start 0.221912 -0.310812) (end 0.221912 0.286088) (stroke (width 0.05) (type solid)) (layer "B.SilkS"))
            (fp_line (start 0.473912 -0.004112) (end 0.223912 -0.004112) (stroke (width 0.05) (type solid)) (layer "B.SilkS"))
        `
        const back_smd_pads = `
            (pad "1" smd roundrect (at -1.1 0 ${p.r}) (size 0.5 0.5) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.to.str})
	        (pad "2" smd roundrect (at 1.1 0 ${p.r}) (size 0.5 0.5) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.from.str})
        `

        const smd_connections = `
            (segment (start ${p.eaxy(-2, 0)}) (end ${p.eaxy(-1.1, 0)}) (width 0.2) (layer "F.Cu") (net ${p.to.index}))
            (segment (start ${p.eaxy(2, 0)}) (end ${p.eaxy(1.1, 0)}) (width 0.2) (layer "F.Cu") (net ${p.from.index}))
            (via (at ${p.eaxy(-2, 0)}) (size 0.6) (drill 0.3) (layers "F.Cu" "B.Cu") (net ${p.to.index}))
            (via (at ${p.eaxy(2, 0)}) (size 0.6) (drill 0.3) (layers "F.Cu" "B.Cu") (net ${p.from.index}))
            (segment (start ${p.eaxy(-2, 0)}) (end ${p.eaxy(-1.1, 0)}) (width 0.2) (layer "B.Cu") (net ${p.to.index}))
            (segment (start ${p.eaxy(2, 0)}) (end ${p.eaxy(1.1, 0)}) (width 0.2) (layer "B.Cu") (net ${p.from.index}))
        `

        const standard_closing = `
        )
        `

        let final = standard_opening;

        if (p.side == "F" || p.reversible) {
            final += front_silk + front_smd_pads;
        }

        if (p.side == "B" || p.reversible) {
            final += back_silk + back_smd_pads;
        }

        final += standard_closing;

        if (p.reversible) {
            final += smd_connections;
        }

        return final;
    }
}