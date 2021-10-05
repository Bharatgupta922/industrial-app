import React from "react";
import { useLocation } from "react-router-dom";
import Wetting from "./../../images/Explaination/Wetting.png";
import Finishing from "./../../images/Explaination/Finishing.png";
import Fixing from "./../../images/Explaination/Fixing.png";
import Levelling from "./../../images/Explaination/Levelling.png";
import Enzymes from "./../../images/Explaination/Enzymes.png";
import Knitting from "./../../images/Explaination/Knitting.png";
import Lubricants from "./../../images/Explaination/Lubricants.png";
import Printing from "./../../images/Explaination/Printing.png";
import Squestering from "./../../images/Explaination/Sequestering.png";
import Speciality from "./../../images/Explaination/Speciality.png";
import Spinning from "./../../images/Explaination/Spinning.png";
import Substitute from "./../../images/Explaination/Substitute.png";
import Washing from "./../../images/Explaination/Washing.png";

import { Table } from "react-bootstrap";
import "./Explaination.css";

const Explaination = () => {
	const data = [
		{
			hello: "hey",
		},
		{
			heading: "Wetting Detergent & Emulsifiers",
			description:
				"Wetting Detergent and Emulsifiers are resistant to hard water and are water-soluble strong with characteristics of infiltration, leveling, wettability and good dispersion. We supply high quality wetting agent chemicals for large scale textile processing companies",
			list: [
				{
					sno: "1",
					Product: "Prewet WT",
					Substrate: "Cotton",
					Description: "Wetting & emulsification.",
				},
				{
					sno: "2",
					Product: "Prewet RW",
					Substrate: "Cotton",
					Description: "Wetting and Emulsifier with re-wetting.",
				},
				{
					sno: "3",
					Product: "Prewet Stain",
					Substrate: "Cotton/Lycra, Polyester, and blends",
					Description:
						"Excellent emulsifier to remove any oil present during scouring.",
				},
				{
					sno: "4",
					Product: "Prewet FBOL",
					Substrate: "Cotton, Silk, wool, polyester & blends",
					Description:
						"Excellent emulsifier with wetting and scouring, mainly used for degumming of silk.",
				},
				{
					sno: "5",
					Product: "Prewet FI",
					Substrate: "Polyester, Viscose, acrylic.",
					Description:
						"Same bath scouring and dyeing, can efficiently remove oil.",
				},
				{
					sno: "6",
					Product: "Prewet AIO",
					Substrate: "Cotton",
					Description: "All in one product for Cotton scouring and bleaching.",
				},
				{
					sno: "7",
					Product: "Prewet WS",
					Substrate: "Wool",
					Description: "Excellent wool scouring agent.",
				},
				{
					sno: "8",
					Product: "Prewet KDC",
					Substrate: "Cotton/Blends",
					Description: "Mainly for Yarns, same bath scouring and dyeing",
				},
				{
					sno: "9",
					Product: "Prewet MR",
					Substrate: "Cotton",
					Description: "Mercerising Agent",
				},
				{
					sno: "10",
					Product: "Prewet OT Paste",
					Substrate: "Cotton & Blends",
					Description: "Instant wetting & Rewetting",
				},
				{
					sno: "11",
					Product: "Prewet OT H/c",
					Substrate: "Cotton & Blends",
					Description: "Instant wetting & Rewetting",
				},
				{
					sno: "12",
					Product: "Prewet WRC",
					Substrate: "Polyester",
					Description: "Weight Reduction of Polyester",
				},
				{
					sno: "13",
					Product: "Prewet NIT",
					Substrate: "Cotton & Blends",
					Description: "Non-Ionic Wetting Cum Detergent",
				},
				{
					sno: "14",
					Product: "Prewet Clean",
					Substrate: "Cotton",
					Description: "Cleaning of lints in enzyme bath",
				},
				{
					sno: "15",
					Product: "Prewet IO",
					Substrate: "Any",
					Description:
						"Hydrogen Peroxide Stabiliser can be applied for any machine",
				},
			],
		},
		{
			heading: "Levelling Agent",
			description:
				"Levelling agents are chemicals that work on the dye molecule and help in fixing the dye particles uniformly which enables them to obtain uniform shade. Levelling agents are also termed as retarding agents or retarders. Levelling agents are key for successful dyeing in situations where dye tends to rush on to the substrate giving non-uniform dyeing.",
			list: [
				{
					sno: "1",
					Product: "Enlev RL",
					Substrate: "Cotton (Non-ionic",
					Description: "Levelling agent for Reactive Dyes non-ionic",
				},
				{
					sno: "2",
					Product: "DYAUX LEVEL C",
					Substrate: "Cotton (Anionic)",
					Description: "Levelling agent for Cotton (Anionic) ",
				},
				{
					sno: "3",
					Product: "Enlev PL",
					Substrate: "Polyester(Anionic)",
					Description: "Levelling & Dispersing agent for Polyester ",
				},
				{
					sno: "4",
					Product: "DYAUX LEVEL P",
					Substrate: "Polyester (Non-ionic)",
					Description: "Levelling agent for Polyester",
				},
				{
					sno: "5",
					Product: "Enlev DLP",
					Substrate: "Polyester (Non-ionic)",
					Description: "Levelling & Dispersing agent for Polyester ",
				},
				{
					sno: "6",
					Product: "Enlev SDBL",
					Substrate: "Polyester",
					Description: "All-in one for Polyester",
				},
				{
					sno: "7",
					Product: "Enlev SMKI",
					Substrate: "Wool & Silk &nyIon",
					Description:
						"Levelling agent for metal complex dyes, and wool reactive dyes ",
				},
				{
					sno: "8",
					Product: "Enlev FBSE",
					Substrate: "Wool & Silk &nyIon ",
					Description: "Levelling agent for acid dyes",
				},
				{
					sno: "9",
					Product: "Retarder ACR Conc",
					Substrate: "Acrylic",
					Description: "Conc. Retarder for acrylic",
				},
				{
					sno: "10",
					Product: "Retarder ACR",
					Substrate: "Acrylic",
					Description: "Retarder for Acrylic",
				},
				{
					sno: "11",
					Product: "Retarder ARL",
					Substrate: "Acrylic",
					Description: "Retarder for Acrylic",
				},
				{
					sno: "12",
					Product: "Enlev LSLW PDR",
					Substrate: "Cotton",
					Description:
						"All in one, for Lubricants, sequestering, levelling, and washing off ",
				},
			],
		},
		{
			heading: "Washing Off / Soaping Agent",
			description:
				"Washing-off agent exhibits excellent dispersing effect on Raw Cotton impurities and on the precipitates caused due to hard water. Washing-off agent functions by removing unfixed or hydrolyzed dye, thereby preventing it from depositing on the textile, leading to good washing fastness.",
			list: [
				{
					sno: "1",
					Product: "Wash RD PDR",
					Substrate: "Cotton & blends",
					Description:
						"Excellent soaping agent, enhances the rubbing fastness of the fabric, also increases the shine effect ",
				},
				{
					sno: "2",
					Product: "Wash off CO 30",
					Substrate: "Cotton & blends",
					Description:
						"Excellent soaping agent, enhances the rubbing fastness of the fabric, also increases the shine effect ",
				},
				{
					sno: "3",
					Product: "Wash SL",
					Substrate: "Synthetic and blends",
					Description:
						"Removes the excess dyestuff on the surface of the fabric to increase the rubbing fastness. ",
				},
				{
					sno: "4",
					Product: "NEG Lithi Core",
					Substrate: "Polyester",
					Description: "Reduction clearing agent in acidic medium",
				},
				{
					sno: "5",
					Product: "Ecotreat 100 L",
					Substrate: "Polyester",
					Description: "Reduction clearing agent in acidic medium",
				},
			],
		},
		{
			heading: "Finishing Agents",
			description:
				"A finishing agent in textile is widely used in the textile industry, which is very important for all the fabrics. It is basically used to improve the appearance of fabric by imparting gloss and by removing wrinkles formed during preparation of fabric. ",
			list: [
				{
					sno: "1",
					Product: "Ensoft CWS",
					Substrate: "Cotton & Blends",
					Description: "Cationic Flakes",
				},
				{
					sno: "2",
					Product: "Ensoft SKI",
					Substrate: "Silk & Wool",
					Description: "Cationic softner specially suitable for silk and wool ",
				},
				{
					sno: "3",
					Product: "Ensoft OC",
					Substrate: "Cotton & Blends",
					Description: "Cationic non-yellowing softner",
				},
				{
					sno: "4",
					Product: "Ensoft TWS",
					Substrate: "Cotton & Denim",
					Description: "Tallow softner, hydrophilic gives smooth feel ",
				},
				{
					sno: "5",
					Product: "Ensoft RW",
					Substrate: "Cotton & Blends",
					Description: "Reactive softner with hydrophilic in nature ",
				},
				{
					sno: "6",
					Product: "Alsil Ultra",
					Substrate: "Cotton & Blends",
					Description:
						"Micro amino silicone softner for inner and outer softness ",
				},
				{
					sno: "7",
					Product: "Ensil N Plus",
					Substrate: "Cotton & Blends",
					Description: "Hydrophilic Silicon Softner",
				},
				{
					sno: "8",
					Product: "Ensil MM",
					Substrate: "Cotton & Blends, Denim ",
					Description: "Micro & Macro Silicon softner for denim. ",
				},
				{
					sno: "9",
					Product: "Ensoft ACR",
					Substrate: "Anionic Softner",
					Description: "Acrylic",
				},
			],
		},
		{
			heading: "Substitute",
			description:
				"Successful substitution of chemicals depends a lot on the process, materials used and numerous other individual conditions. These products listed are sustainable and safe for the environment. ",
			list: [
				{
					sno: "1",
					Product: "Polyacid GAO",
					Substrate: "Any substrate",
					Description: "Acetic acid replacement",
				},
				{
					sno: "2",
					Product: "Dyeaux Soda",
					Substrate: "Cotton",
					Description: "Soda ash replacement for reactive dyes ",
				},
				{
					sno: "3",
					Product: "Neutrafab SS",
					Substrate: "Cotton",
					Description: "Sodium Sulphide replacement",
				},
				{
					sno: "4",
					Product: "Neutrafab PD",
					Substrate: "Cotton",
					Description: "Sulphur neutralising agent",
				},
			],
		},
		{
			heading: "Printing Series",
			description:
				"Textile printing is the process of applying color to fabric in definite patterns or designs. In properly printed fabrics the color is bonded with the fiber, so as to resist washing and friction. We offer a wide range of printing chemicals that cater to your needs",
			list: [
				{
					sno: "1",
					Product: "NEG-WHITE 1K",
					Substrate: "Cotton & Blends",
					Description: "Khadi Binder",
				},
				{
					sno: "2",
					Product: "NEG-CLEAR 1K",
					Substrate: "Cotton & Blends",
					Description: "Clear",
				},
				{
					sno: "3",
					Product: "NEG-WHITE 2K",
					Substrate: "Cotton & Blends",
					Description: "Khadi Binder",
				},
				{
					sno: "4",
					Product: "NEG-CLEAR 2K",
					Substrate: "Cotton & Blends",
					Description: "Clear",
				},
				{
					sno: "5",
					Product: "NEG-WHITE 3K",
					Substrate: "Cotton & Blends",
					Description: "Khadi Binder",
				},
				{
					sno: "6",
					Product: "NEG-CLEAR 1K",
					Substrate: "Cotton & Blends",
					Description: "Clear",
				},
				{
					sno: "7",
					Product: "NEG-PIGMENT120",
					Substrate: "Cotton & Blends",
					Description: "All in one for pigment printing",
				},
				{
					sno: "8",
					Product: "NEG-B4KSPL",
					Substrate: "Cotton & Blends",
					Description: "Binder 38% with formaldehyde",
				},
				{
					sno: "9",
					Product: "NEG-B5K ECO",
					Substrate: "Cotton & Blends",
					Description: "Binder 50% with formaldehyde",
				},
				{
					sno: "10",
					Product: "NEG-TKN",
					Substrate: "Cotton & Blends",
					Description: "Thickener for pigment printing",
				},
				{
					sno: "11",
					Product: "NEG-FIXER",
					Substrate: "Cotton & Blends",
					Description: "Fixer for Pigment printing",
				},
				{
					sno: "12",
					Product: "NEG-SOFTSIL",
					Substrate: "Cotton & Blends",
					Description: "Softner for prints",
				},
				{
					sno: "13",
					Product: "NEG-CW DC",
					Substrate: "Cotton & Blends",
					Description: "Discharge print",
				},
				{
					sno: "14",
					Product: "Discharge print",
					Substrate: "Cotton & Blends",
					Description: "Discharge print",
				},
				{
					sno: "15",
					Product: "NEG-INDIGO DC",
					Substrate: "Denim",
					Description: "Indigo Discharge",
				},
			],
		},
		{
			heading: "Knitting",
			description:
				"Our Knitting oils are developed to meet the critical requirements of modern sewing and industrial knitting machines.",
			list: [
				{
					sno: "1",
					Product: "KMTWASH9K",
					Substrate: "",
					Description: "High Performance Knitting oil",
				},
				{
					sno: "2",
					Product: "KMTWASH3K",
					Substrate: "",
					Description: "High Performance Knitting oil",
				},
			],
		},
		{
			heading: "Sequestering Agents",
			description:
				"A sequestering is a complex forming auxiliary chemical with metals such as Iron, Copper, Nickel, Zinc, and Magnesium that are present in water and affects the textile processing. The three main stages in which sequestering agents are used are ● Pretreatment ● Bleaching ● Dyeing  ",
			list: [
				{
					sno: "1",
					Product: "Sequester CL",
					Substrate: "Any",
					Description: "Chelates Ca++, Mg++& Fe++",
				},
				{
					sno: "2",
					Product: "Sequester N",
					Substrate: "Any",
					Description: "Fe++ Ca++ & Mg++",
				},
				{
					sno: "3",
					Product: "Sequester 2UDY",
					Substrate: "Cotton",
					Description: "Protonoic treatment",
				},
			],
		},
		{
			heading: "Lubricants / Anti-crease",
			description:
				"Anti-Creasing agents reduce the friction between fibres and fibres-dyeing tank that prevents creases or scratches, due to its smoothing and softening effects. Anti creasing agents and lubricants have the advantages of low foaming and excellent stability, suitable for all kinds of fabrics, especially knitted fabric pretreatment, dyeing, and post-processing. It is also applicable to the printing and dyeing processing. These are environment-friendly and non-dangerous, which can be shipped safely.",
			list: [
				{
					sno: "1",
					Product: "Lube ACR",
					Substrate: "Cotton/Polyester",
					Description: "Phosphate base",
				},
				{
					sno: "2",
					Product: "Prewet SPLF",
					Substrate: "Cotton/Polyester",
					Description: "Polymer base",
				},
			],
		},
		{
			heading: "Fixing Agent",
			description:
				"A fixing agent includes good capability with cross linking agents without promoting dye bleeding. It is generally used after completing the dyeing or printing process. It Improves the color fastness of dye in fabric. With environmental awareness and improvement of people's living standards, fixing agents are now more required for textiles comfort, clean and safety. ",
			list: [
				{
					sno: "1",
					Product: "Dyfix WFF",
					Substrate: "Cotton",
					Description:
						"Concentrated fixing agent for reacGve dyes (Non-formaldehyde) ",
				},
				{
					sno: "2",
					Product: "Dyfix NF",
					Substrate: "Cotton",
					Description: "Non-formaldehyde dye fixing agent for reactive dyes ",
				},
				{
					sno: "3",
					Product: "Dyfix RN",
					Substrate: "Silk",
					Description: "Dyehxing agent for silk.",
				},
			],
		},
		{
			heading: "Enzymes",
			description:
				"Enzymes are used to remove the starch and scale down the effectiveness of hydrogen peroxide, lignin and bleaching textiles. Enzymes are safely used in the textile processes like de-sizing, scouring, bleaching, dyeing and finishing. Moreover, enzymes are used as substitutes of harmful chemicals which pose environmental risks and hence are biodegradable. ",
			list: [
				{
					sno: "1",
					Product: "Enzyme CL",
					Substrate: "Cotton knits & denims ",
					Description: "Neutral enzyme under broad pH ",
				},
				{
					sno: "2",
					Product: "Enzyme AC",
					Substrate: "Cotton knits & denims ",
					Description: "Acid Enzyme with excellent puckering ",
				},
				{
					sno: "3",
					Product: "Enzyme PK",
					Substrate: "Cotton",
					Description: "Peroxide Killer enzymatic",
				},
				{
					sno: "4",
					Product: "Desizer AM",
					Substrate: "Cotton woven & Garments",
					Description:
						"Desizing enzyme can operate in wide pH range and stable at high temperature ",
				},
			],
		},
		{
			heading: "Speciality Chemicals",
			description:
				"Speciality Chemicals are described as chemicals with high value and low volume which are used as performance enhancing properties. ",
			list: [
				{
					sno: "1",
					Product: "Anti fungal Agents Prewet AF",
					Substrate: "Cotton & Blends",
					Description: "To prevent the of fungus, or mist & dew ",
				},
				{
					sno: "2",
					Product: "Moth Proofing agent Prewet MF ",
					Substrate: "Wool & Silk",
					Description: "To prevent the protien fibres from moth or insects ",
				},
				{
					sno: "3",
					Product: "Flame Retarding Prewet FR",
					Substrate: "Cotton & Polyester ",
					Description: "Treatment for fire proof ",
				},
				{
					sno: "4",
					Product: "Fragnance Finish Prewet F ",
					Substrate: "Cotton & Polyester ",
					Description:
						"Different types of fragnance specially for Home furnish ",
				},
				{
					sno: "5",
					Product: "UV Treatment Prewet UV",
					Substrate: "Cotton & Polyester ",
					Description:
						"To prevent the colour to get faded due to ultra violet rays",
				},
				{
					sno: "6",
					Product: "Anti-Ozonate Softners Ensoft AOS ",
					Substrate: "Cotton & Polyester ",
					Description:
						"To prevent yellowing for long stack up of the finish product",
				},
			],
		},
		{
			heading: "Spinning",
			description:
				"Range of antistatic oil for fabrics and conning oil for high speed texturising machines.",
			list: [
				{
					sno: "1",
					Product: "SPIN CTX",
					Substrate: "",
					Description: "Antistatic oil for Synthetics",
				},
				{
					sno: "2",
					Product: "SPIN CSO",
					Substrate: "",
					Description: "Antistatic oil for synthetic and Cotton ",
				},
				{
					sno: "3",
					Product: "SPIN 9K",
					Substrate: "",
					Description: "Antistatic oil for Wool & blends ",
				},
				{
					sno: "4",
					Product: "Spin CO",
					Substrate: "",
					Description: "conning oil for high speed texturising machine ",
				},
			],
		},
	];

	const location = useLocation();
	// console.log(location);
	let index = Number(location.index);

	function renderImage() {
		if (index == 1) {
			return (
				<img src={Wetting} alt={data[index].heading} className="banner__img" />
			);
		} else if (index == 2) {
			return (
				<img
					src={Levelling}
					alt={data[index].heading}
					className="banner__img"
				/>
			);
		} else if (index == 3) {
			return (
				<img src={Washing} alt={data[index].heading} className="banner__img" />
			);
		} else if (index == 4) {
			return (
				<img
					src={Finishing}
					alt={data[index].heading}
					className="banner__img"
				/>
			);
		} else if (index == 5) {
			return (
				<img
					src={Substitute}
					alt={data[index].heading}
					className="banner__img"
				/>
			);
		} else if (index == 6) {
			return (
				<img src={Printing} alt={data[index].heading} className="banner__img" />
			);
		} else if (index == 7) {
			return (
				<img src={Knitting} alt={data[index].heading} className="banner__img" />
			);
		} else if (index == 8) {
			return (
				<img
					src={Squestering}
					alt={data[index].heading}
					className="banner__img"
				/>
			);
		} else if (index == 9) {
			return (
				<img
					src={Lubricants}
					alt={data[index].heading}
					className="banner__img"
				/>
			);
		} else if (index == 10) {
			return (
				<img src={Fixing} alt={data[index].heading} className="banner__img" />
			);
		} else if (index == 11) {
			return (
				<img src={Enzymes} alt={data[index].heading} className="banner__img" />
			);
		} else if (index == 12) {
			return (
				<img
					src={Speciality}
					alt={data[index].heading}
					className="banner__img"
				/>
			);
		} else if (index == 13) {
			return (
				<img src={Spinning} alt={data[index].heading} className="banner__img" />
			);
		}
	}
	return (
		<div className="explaination container-fluid mt-5 pt-5 overflow-hidden">
			<div className="row g-0">
				<div className="col-12 hero-banner d-flex align-items-center justify-content-center">
					{renderImage()}
				</div>
			</div>
			<p className="heading">
				{" "}
				<b>{data[index].heading}</b>
			</p>
			<div className="row g-0">
				<div className="col-md-6 col-12 mx-auto mb-5">
					<p className="text-center mb-3 p-4">{data[index].description}</p>
				</div>
			</div>
			<div className="table__package">
				<div className="table__heading">
					<p className="products__table__sno">S NO.</p>
					<p className="products__table__product">Product</p>
					<p className="products__table__substrate">Substrate</p>
					<p className="products__table__description">Description</p>
				</div>
				{data[Number(location.index)].list.map(
					(x, key) => (
						<div className="products__table">
							<p className="products__table__sno">{x.sno}</p>
							<p className="products__table__product">{x.Product}</p>
							<p className="products__table__substrate">{x.Substrate}</p>
							<p className="products__table__description">{x.Description}</p>
						</div>
					),
					// <tr key={key}>
					//     <td>{x.sno}</td>
					//     <td>{x.Product}</td>
					//     <td>{x.Substrate}</td>
					//     <td>{x.Description}</td>
					// </tr>
				)}
			</div>
		</div>
	);
};

export default Explaination;
