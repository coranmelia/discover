import Concept1 from '../../assets/artifacts/conceptual1.png';
import Concept2 from '../../assets/artifacts/conceptual2.png';
import Concept3 from '../../assets/artifacts/conceptual3.png';
import Concept4 from '../../assets/artifacts/conceptual4.png';

export default [
    {
        id: 1,
        pageTitle: "Personality Quiz",
        profile: Concept1,
        overview: "We found that borrowers lack a sense of context" +
            " (e.g. “what should I do to repay some principle while in-school?”), " +
            "causing indecision during the loan application. This brief questionnaire " +
            "results in specific product recommendations based on users’ financial habits and future plans. ",
        summary: [
            "Pro: Users appreciate “narrativizing” of personal finances\n",
            "Con: The overly casual UI & tone felt “gimmicky” and raised skepticism about obscuring details like hidden fees\n",
            "Con: Trendy & modern needs to be balanced with legitimacy & professionalism in the financial domain\n",
            "Con: Some users had privacy concerns"]
    },
    {
        id: 2,
        pageTitle: "Risk Assessment",
        profile: Concept2,
        overview: "This risk assessment prototype’s style and tone matches the DSL application. Using a clustering algorithm, " +
            "it would use borrowers’ financial experience, time availability, and capability to predict the likelihood of" +
            " this person repaying the loan while in school. ",
        summary: [
            "Pro: Those who distrust a “playful” UI or tone prefer this page because it is more “adult” / professional\n",
            "Con: To some, the lack of storytelling felt unnatural\n",
            "Con: Overall, users distrusted and resisted being evaluated by their productivity & standardized test scores "]
    },
    {
        id: 3,
        pageTitle: "Loan Product Recommendation",
        profile: Concept3,
        overview: "To improve borrower comprehension of individual loan products, we designed this revised loan selection page " +
            "with stories from real previous borrowers. Hearing from previous borrowers about why they chose a specific " +
            "repayment plan and how they planned to make it work may help borrowers make a more confident decision.",
        summary: ["Pro: Users appreciate “narrativizing” of personal finances\n",
        "Con: Users did not fully trust such a direct recommendation or the focus on narrative over numbers\n",
        "Con: Users could not empathize with total strangers\n",
        "Con: To feel comfortable, users also need access to all financial details for reassurance "]

    },
    {
        id: 4,
        pageTitle:"Adult Package",
        profile: Concept4,
        overview: "We designed an adult starter kit as a ‘results’ page following the questionnaire. We found that younger " +
            "borrowers show little understanding towards college loans or how to get started. This prototype aimed to " +
            "address early preparation for younger borrowers.",
        summary: ["Pro: Users appreciate “narrativizing” of financial planning\n",
        "Pro: Users find it convenient to consolidate finances in one place/bank\n",
        "Con: \"Adult starter kit\" may come off as condescending\n",
        "Con: Users were skeptical of a financial institution’s motives behind recommendations"]
    }
]
