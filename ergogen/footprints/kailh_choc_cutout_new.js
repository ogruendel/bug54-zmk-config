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
            (fp_line (start -4.625 -7.225) (end -4.625 -4.875) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start -4.625 -7.225) (end -2.625 -7.225) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start -2.625 -7.225) (end -2.625 -8.525) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start -2.475 -4.875) (end -4.625 -4.875) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 1.5 -3.75) (end -1.35 -3.75) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 1.792467 -8.525) (end -2.625 -8.525) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 2.4 -2.32) (end 2.4 -2.85) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 3.170746 -1.549254) (end 2.4 -2.32) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 7.020746 -6.350746) (end 4.670746 -6.350746) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 7.696492 -5.675) (end 7.020746 -6.350746) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 7.696492 -5.025) (end 7.696492 -5.675) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 7.696492 -2.675) (end 7.696492 -1.549254) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 7.696492 -1.549254) (end 3.170746 -1.549254) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 9.846492 -5.025) (end 7.696492 -5.025) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 9.846492 -5.025) (end 9.846492 -2.675) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 9.846492 -2.675) (end 7.696492 -2.675) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_arc (start -1.35 -4.875) (end -1.35 -3.75) (angle 90) (stroke (width 0.1) (type default)) (layer "F.SilkS"))
            (fp_arc (start 1.5 -2.85) (end 1.5 -3.75) (angle 90) (stroke (width 0.1) (type default)) (layer "F.SilkS"))
            (fp_arc (start 4.670719 -8.383486) (end 4.670719 -6.350744) (angle 76.3853) (stroke (width 0.1) (type default)) (layer "F.SilkS"))
            (fp_arc (start 1.82385 -7.603636) (end 1.792467 -8.525) (angle 72.8703) (stroke (width 0.1) (type default)) (layer "F.SilkS"))
            (fp_circle (center -5.5 0) (end -4.4 0) (stroke (width 0.1) (type solid)) (fill no) (layer "F.SilkS"))
            (fp_circle (center 0 0) (end 2 0) (stroke (width 0.1) (type solid)) (fill no) (layer "F.SilkS"))
            (fp_circle (center 5.5 0) (end 6.6 0) (stroke (width 0.1) (type solid)) (fill no) (layer "F.SilkS"))
        `

        const back_contents = `
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
