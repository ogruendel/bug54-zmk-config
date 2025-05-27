module.exports = {
    params: {
        side: "F",
        reversible: false,
        from: { type: 'net', value: undefined },
        to: { type: 'net', value: undefined },
    },
    body: p => {
        const standard_opening = `
            (footprint "kailh_choc_hotswap_socket"
                (layer "${p.reversible ? 'B' : 'F'}.SilkS")
                ${p.at}
                (attr smd)
                (embedded_fonts no)
        `

        const front_pads = `
            (pad "1" smd roundrect (at -2.225 0 ${p.r}) (size 1.05 2) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.to.str})
            (pad "2" smd roundrect (at 2.225 0 ${p.r}) (size 1.05 2) (layers "F.Cu" "F.Mask" "F.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.from.str})
        `
                
        const back_pads = `
            (pad "1" smd roundrect (at -2.225 0 ${p.r}) (size 1.05 2) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.to.str})
            (pad "2" smd roundrect (at 2.225 0 ${p.r}) (size 1.05 2) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.from.str})
        `
        
        const reversible_extras = `
            (segment (start ${p.eaxy(-2.225, 0)}) (end ${p.eaxy(-1, 0)}) (width 0.2) (layer "F.Cu") (net ${p.to.index}))
            (segment (start ${p.eaxy(2.225, 0)}) (end ${p.eaxy(1, 0)}) (width 0.2) (layer "F.Cu") (net ${p.from.index}))
            (via (at ${p.eaxy(-1, 0)}) (size 0.6) (drill 0.3) (layers "F.Cu" "B.Cu") (net ${p.to.index}))
            (via (at ${p.eaxy(1, 0)}) (size 0.6) (drill 0.3) (layers "F.Cu" "B.Cu") (net ${p.from.index}))
            (segment (start ${p.eaxy(-2.225, 0)}) (end ${p.eaxy(-1, 0)}) (width 0.2) (layer "B.Cu") (net ${p.to.index}))
            (segment (start ${p.eaxy(2.225, 0)}) (end ${p.eaxy(1, 0)}) (width 0.2) (layer "B.Cu") (net ${p.from.index}))
        `
        const standard_closing = `
        )
        `

        let final = standard_opening;

        if (p.side === "F" || p.reversible) {
            final += front_pads;
        }

        if (p.side === "B" || p.reversible) {
            final += back_pads;
        }
        
        final += standard_closing;

        if (p.reversible) {
            final += reversible_extras;
        }

        return final;
    }
}
