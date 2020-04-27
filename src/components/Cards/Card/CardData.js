function CardData() {
    const img = [
        {
            title: 'Recommended Product',
            url: require('../../../assets/imgs/card1.png'),
            id: '0',
            overview: "In order to improve borrower comprehension of each individual loan product," +
                " we designed this revised loan selection page with stories from real previous borrowers. We" +
                " envision that hearing from previous borrowers about why they chose the specific repayment" +
                " plan and how they planned to make the loan work for them will help borrowers make a more" +
                " confident decision.",
            text: [ 'Pro:  Some appreciated that the questionnaire (& its style) provided a narrative to personal finances & the student loan selection process ',
                'Con:  The overly casual UI & tone felt “gimmicky” and raised skepticism about obscuring financial details (i.e., hidden fees)',
                'Con:  Trendy & modern needs to be balanced with legitimacy & professionalism to be appropriate in the financial domain ',
                'Con:  Some people had privacy concerns']
        },
        {
            title: 'Archetype',
            url: require('../../../assets/imgs/card2.png'),
            id: '1',
            overview: "We designed an adult starter kit which stands on the risky end  of solutions (in user testing, we conbined this prototype" +
                " with the questionnaire). From our research, we found that younger borrowers (e.g. high school " +
                "students) show little understanding towards college loan and have no idea how to get started. " +
                "Thus, this prototype aimed to address the need of early preparation for younger borrowers.",
            text:[ 'Pro: Some appreciated the inclusion of narrative to personal finances & the student loan selection process',
                'Con:   Users did not fully trust: 1) such a direct recommendation, 2) the focus on narrative over numbers',
                'Con:   Users could not empathize with total strangers',
                'Con:   Users were not comfortable with just this table; they also needed access to all financial details for reassurance']
        },
    ];
    return img;
}

export default CardData;
