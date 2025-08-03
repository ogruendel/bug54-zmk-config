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
            (fp_line (start -4.846492 -7.325) (end -2.696492 -7.325) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start -4.846492 -4.975) (end -4.846492 -7.325) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start -4.846492 -4.975) (end -2.696492 -4.975) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start -2.696492 -7.775) (end -2.020746 -8.450746) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start -2.696492 -7.325) (end -2.696492 -7.775) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start -2.696492 -4.975) (end -2.696492 -4.325) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start -2.696492 -4.325) (end -2.020746 -3.649254) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start -2.020746 -8.450746) (end 1.829254 -8.450746) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start -2.020746 -3.649254) (end 0.329254 -3.649254) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 1.829254 -8.450746) (end 2.6 -7.68) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 2.6 -7.68) (end 2.6 -7.15) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 3.207533 -1.475) (end 7.725 -1.475) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 3.5 -6.25) (end 6.599999 -6.25) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 7.725 -5.125) (end 9.625 -5.125) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 7.725 -2.775) (end 7.725 -1.475) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 9.625 -2.775) (end 7.725 -2.775) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_line (start 9.625 -2.775) (end 9.625 -5.125) (stroke (width 0.1) (type solid)) (layer "F.SilkS"))
            (fp_arc (start 0.329283 -1.616516) (end 0.329281 -3.649256) (angle 76.3854) (stroke (width 0.1) (type default)) (layer "F.SilkS"))
            (fp_arc (start 3.17615 -2.39636) (end 3.207533 -1.475) (angle 72.8705) (stroke (width 0.1) (type default)) (layer "F.SilkS"))
            (fp_arc (start 3.5 -7.15) (end 3.5 -6.25) (angle 90) (stroke (width 0.1) (type default)) (layer "F.SilkS"))
            (fp_arc (start 6.6 -5.125) (end 6.599999 -6.25) (angle 90) (stroke (width 0.1) (type default)) (layer "F.SilkS"))
            (fp_circle (center -5.5 0) (end -4.4 0) (stroke (width 0.1) (type solid)) (fill no) (layer "F.SilkS"))
            (fp_circle (center 0 0) (end 2 0) (stroke (width 0.1) (type solid)) (fill no) (layer "F.SilkS"))
            (fp_circle (center 5.5 0) (end 6.6 0) (stroke (width 0.1) (type solid)) (fill no) (layer "F.SilkS"))
        `

        const back_contents = `
            (fp_line (start -9.625 -2.775) (end -9.625 -5.125) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -9.625 -2.775) (end -7.725 -2.775) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -7.725 -5.125) (end -9.625 -5.125) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -7.725 -2.775) (end -7.725 -1.475) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -3.5 -6.25) (end -6.599999 -6.25) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -3.207533 -1.475) (end -7.725 -1.475) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -2.6 -7.68) (end -2.6 -7.15) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start -1.829254 -8.450746) (end -2.6 -7.68) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start 2.020746 -8.450746) (end -1.829254 -8.450746) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start 2.020746 -3.649254) (end -0.329254 -3.649254) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start 2.696492 -7.775) (end 2.020746 -8.450746) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start 2.696492 -7.325) (end 2.696492 -7.775) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start 2.696492 -4.975) (end 2.696492 -4.325) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start 2.696492 -4.325) (end 2.020746 -3.649254) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start 4.846492 -7.325) (end 2.696492 -7.325) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start 4.846492 -4.975) (end 2.696492 -4.975) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_line (start 4.846492 -4.975) (end 4.846492 -7.325) (stroke (width 0.1) (type solid)) (layer "B.SilkS"))
            (fp_arc (start -6.6 -5.125) (end -7.725 -5.125) (angle 90) (stroke (width 0.1) (type default)) (layer "B.SilkS"))
            (fp_arc (start -3.5 -7.15) (end -2.6 -7.15) (angle 90) (stroke (width 0.1) (type default)) (layer "B.SilkS"))
            (fp_arc (start -0.329293 -1.61653) (end -2.304904 -2.095004) (angle 76.3859) (stroke (width 0.1) (type default)) (layer "B.SilkS"))
            (fp_arc (start -3.176147 -2.396358) (end -2.304901 -2.094999) (angle 72.8708) (stroke (width 0.1) (type default)) (layer "B.SilkS"))
            (fp_circle (center -5.5 0) (end -6.6 0) (stroke (width 0.1) (type solid)) (fill no) (layer "B.SilkS"))
            (fp_circle (center 0 0) (end -2 0) (stroke (width 0.1) (type solid)) (fill no) (layer "B.SilkS"))
            (fp_circle (center 5.5 0) (end 4.4 0) (stroke (width 0.1) (type solid)) (fill no) (layer "B.SilkS"))
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
