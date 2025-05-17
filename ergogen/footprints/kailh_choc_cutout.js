module.exports = {
    params: {
        reversed: false,
    },
    body: p => {
        const standard_opening = `
            (footprint "kailh_choc_hotswap_socket"
                (layer "${p.reversed ? 'B' : 'F'}.SilkS")
                ${p.at}
                (attr smd)
                (embedded_fonts no)
        `

        const front_contents = `
            (fp_line (start -4.775 -7.225) (end -4.775 -4.875) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start -4.775 -7.225) (end -2.625 -7.225) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start -2.625 -7.225) (end -2.625 -8.455) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start -2.625 -4.875) (end -4.775 -4.875) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 1.141492 -8.454216) (end -2.625 -8.455) (stroke (width 0.1) (type default)) (layer "F.SilkS"))
            (fp_line (start 1.5 -3.75) (end -1.5 -3.75) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 2.4 -2.32) (end 2.4 -2.85) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 3.170746 -1.549254) (end 2.4 -2.32) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 6.380746 -6.200746) (end 4.019746 -6.200746) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 6.380746 -1.549254) (end 3.170746 -1.549254) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 7.151492 -5.43) (end 6.380746 -6.200746) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 7.151492 -5.025) (end 7.151492 -5.43) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 7.151492 -2.675) (end 7.151492 -2.32) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 7.151492 -2.32) (end 6.380746 -1.549254) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 9.301492 -5.025) (end 7.151492 -5.025) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 9.301492 -5.025) (end 9.301492 -2.675) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 9.301492 -2.675) (end 7.151492 -2.675) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_arc (start -1.5 -4.875) (end -1.5 -3.75) (angle 90) (stroke (width 0.1) (type default)) (layer "F.SilkS"))
            (fp_arc (start 1.5 -2.85) (end 1.5 -3.75) (angle 90) (stroke (width 0.1) (type default)) (layer "F.SilkS"))
            (fp_arc (start 4.019746 -8.233483) (end 4.019746 -6.200746) (angle 76.3854) (stroke (width 0.1) (type default)) (layer "F.SilkS"))
            (fp_arc (start 1.141492 -7.521992) (end 1.141492 -8.454216) (angle 75.5255) (stroke (width 0.1) (type default)) (layer "F.SilkS"))
            (fp_circle (center -5.5 0) (end -4.5 0) (stroke (width 0.1) (type default)) (fill no) (layer "F.SilkS"))
            (fp_circle (center 0 0) (end 1.6 0) (stroke (width 0.1) (type default)) (fill no) (layer "F.SilkS"))
            (fp_circle (center 5.5 0) (end 6.5 0) (stroke (width 0.1) (type default)) (fill no) (layer "F.SilkS"))
        `

        const back_contents = `
            (fp_line (start -9.301492 -5.025) (end -9.301492 -2.675) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -9.301492 -5.025) (end -7.151492 -5.025) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -9.301492 -2.675) (end -7.151492 -2.675) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -7.151492 -5.43) (end -6.380746 -6.200746) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -7.151492 -5.025) (end -7.151492 -5.43) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -7.151492 -2.675) (end -7.151492 -2.32) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -7.151492 -2.32) (end -6.380746 -1.549254) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -6.380746 -6.200746) (end -4.019746 -6.200746) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -6.380746 -1.549254) (end -3.170746 -1.549254) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -3.170746 -1.549254) (end -2.4 -2.32) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -2.4 -2.32) (end -2.4 -2.85) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -1.5 -3.75) (end 1.5 -3.75) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -1.141492 -8.454216) (end 2.625 -8.455) (stroke (width 0.1) (type default)) (layer "B.SilkS"))
            (fp_line (start 2.625 -7.225) (end 2.625 -8.455) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start 2.625 -4.875) (end 4.775 -4.875) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start 4.775 -7.225) (end 2.625 -7.225) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start 4.775 -7.225) (end 4.775 -4.875) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_arc (start -1.5 -2.85) (end -2.4 -2.85) (angle 90) (stroke (width 0.1) (type default)) (layer "B.SilkS"))
            (fp_arc (start 1.5 -4.875) (end 2.625 -4.875) (angle 90) (stroke (width 0.1) (type default)) (layer "B.SilkS"))
            (fp_arc (start -4.019746 -8.233483) (end -2.044126 -7.755) (angle 76.3854) (stroke (width 0.1) (type default)) (layer "B.SilkS"))
            (fp_arc (start -1.141492 -7.521992) (end -2.044126 -7.755) (angle 75.5255) (stroke (width 0.1) (type default)) (layer "B.SilkS"))
            (fp_circle (center -5.5 0) (end -6.5 0) (stroke (width 0.1) (type default)) (fill no) (layer "B.SilkS"))
            (fp_circle (center 0 0) (end -1.6 0) (stroke (width 0.1) (type default)) (fill no) (layer "B.SilkS"))
            (fp_circle (center 5.5 0) (end 4.5 0) (stroke (width 0.1) (type default)) (fill no) (layer "B.SilkS"))
        `

        const standard_closing = `
        )
        `

        let final = standard_opening;

        final += p.reversed ? back_contents : front_contents;

        final += standard_closing;

        return final;
    }
}
