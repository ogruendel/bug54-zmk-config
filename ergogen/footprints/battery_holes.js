module.exports = {
    params: {
        from: { type: 'net', value: undefined },
        to: { type: 'net', value: undefined },
    },
    body: p => {
        const standard_opening = `
            (footprint "battery_holes"
                (layer "F.Cu")
                ${p.at}
        `
    
        const pads = `
            (pad "1" thru_hole circle (at 7.62 0 ${p.r}) (size 1.4 1.4) (drill 0.8) (layers "*.Cu" "*.Mask") (remove_unused_layers no) ${p.to.str})
            (pad "2" thru_hole circle (at -7.62 0 ${p.r}) (size 1.4 1.4) (drill 0.8) (layers "*.Cu" "*.Mask") (remove_unused_layers no) ${p.from.str})
        `
        
        const text = `
            (gr_text "B-" (at ${p.eaxy(8.5, -1)} ${p.r}) (layer "F.SilkS") (effects (font (size 1 1) (thickness 0.15)) (justify right bottom)))
            (gr_text "B-" (at ${p.eaxy(8.5, -1)} ${p.r}) (layer "B.SilkS") (effects (font (size 1 1) (thickness 0.15)) (justify left bottom mirror)))
            (gr_text "B+" (at ${p.eaxy(-6.5, -1)} ${p.r}) (layer "F.SilkS") (effects (font (size 1 1) (thickness 0.15)) (justify right bottom)))
            (gr_text "B+" (at ${p.eaxy(-6.5, -1)} ${p.r}) (layer "B.SilkS") (effects (font (size 1 1) (thickness 0.15)) (justify left bottom mirror)))
        `

        const standard_closing = `
            )
        `

        let final = standard_opening + pads;

        final += standard_closing + text;

        return final;
    }
}
