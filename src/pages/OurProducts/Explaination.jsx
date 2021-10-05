import React from 'react';
import { useLocation } from 'react-router-dom';
import image1 from "./../../images/banner2.png";
import {Table} from "react-bootstrap";
import "./Explaination.css";
const Explaination = () => {
    const location = useLocation();
    console.log(location);
    const data = [
        {
            "hello":"hey",
        },
        {
        "heading":"Wetting Detergent & Emulsifiers",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dapibus pharetra feugiat convallis nunc quam quis nisl. Gravida diam quam nec mauris mi aliquam mi. Viverra ipsum cursus fringilla curabitur. Consequat, porta quis fringilla adipiscing sapien viverra. In sit fusce mattis eu sit integer et nisl. Massa id adipiscing dictum pulvinar dolor tincidunt. Purus vitae, morbi sed semper leo. Egestas sagittis, iaculis egestas ut tellus vitae eget. Risus purus sit nisl faucibus vitae. At.",
        "list":[
            {
                "sno":"1",
                "Product":"Prewet WT",
                "Substrate":"Cotton",
                "Description":"Wetting & emulsification.",
            },
            {
                "sno":"2",
                "Product":"Prewet RW",
                "Substrate":"Cotton",
                "Description":"Wetting and Emulsifier with re-wetting.",
            },
            {
                "sno":"3",
                "Product":"Prewet Stain",
                "Substrate":"Cotton/Lycra, Polyester, and blends",
                "Description":"Wetting & emulsification.",
            },
            {
                "sno":"4",
                "Product":"Prewet FBOL",
                "Substrate":"Cotton, Silk, wool, polyester & blends",
                "Description":"Wetting & emulsification.",
            },
            {
                "sno":"5",
                "Product":"Prewet FI",
                "Substrate":"Polyester, Viscose, acrylic.",
                "Description":"Wetting & emulsification.",
            },
            {
                "sno":"6",
                "Product":"Prewet AIO",
                "Substrate":"Cotton",
                "Description":"Wetting & emulsification.",
            },
            {
                "sno":"7",
                "Product":"Prewet WS",
                "Substrate":"Wool",
                "Description":"Wetting & emulsification.",
            },
            {
                "sno":"8",
                "Product":"Prewet KDC",
                "Substrate":"Cotton/Blends",
                "Description":"Wetting & emulsification.",
            },
            {
                "sno":"9",
                "Product":"Prewet MR",
                "Substrate":"Cotton",
                "Description":"Wetting & emulsification.",
            },
            {
                "sno":"10",
                "Product":"Prewet OT Paste",
                "Substrate":"Cotton & Blends",
                "Description":"Wetting & emulsification.",
            },
            {
                "sno":"11",
                "Product":"Prewet OT H/c",
                "Substrate":"Cotton & Blends",
                "Description":"Wetting & emulsification.",
            },
            {
                "sno":"12",
                "Product":"Prewet WRC",
                "Substrate":"Polyester",
                "Description":"Wetting & emulsification.",
            },
            {
                "sno":"13",
                "Product":"Prewet NIT",
                "Substrate":"Cotton & Blends",
                "Description":"Wetting & emulsification.",
            },
            {
                "sno":"14",
                "Product":"Prewet Clean",
                "Substrate":"Cotton",
                "Description":"Wetting & emulsification.",
            },
            {
                "sno":"15",
                "Product":"Prewet IO",
                "Substrate":"Any",
                "Description":"Wetting & emulsification.",
            },
        ]
        },
        {
            "heading":"Levelling Agent",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dapibus pharetra feugiat convallis nunc quam quis nisl. Gravida diam quam nec mauris mi aliquam mi. Viverra ipsum cursus fringilla curabitur. Consequat, porta quis fringilla adipiscing sapien viverra. In sit fusce mattis eu sit integer et nisl. Massa id adipiscing dictum pulvinar dolor tincidunt. Purus vitae, morbi sed semper leo. Egestas sagittis, iaculis egestas ut tellus vitae eget. Risus purus sit nisl faucibus vitae. At.",
            "list":[
                {
                    "sno":"1",
                    "Product":"Enlev RL",
                    "Substrate":"Cotton (Non-ionic",
                    "Description":"Levelling agent for Reactive Dyes non-ionic",
                },
                {
                    "sno":"2",
                    "Product":"DYAUX LEVEL C",
                    "Substrate":"Cotton (Anionic)",
                    "Description":"Levelling agent for Cotton (Anionic) ",
                },
                {
                    "sno":"3",
                    "Product":"Enlev PL",
                    "Substrate":"Polyester(Anionic)",
                    "Description":"Levelling & Dispersing agent for Polyester ",
                },
                {
                    "sno":"4",
                    "Product":"DYAUX LEVEL P",
                    "Substrate":"Polyester (Non-ionic)",
                    "Description":"Levelling agent for Polyester",
                },
                {
                    "sno":"5",
                    "Product":"Enlev DLP",
                    "Substrate":"Polyester (Non-ionic)",
                    "Description":"Levelling & Dispersing agent for Polyester ",
                },
                {
                    "sno":"6",
                    "Product":"Enlev SDBL",
                    "Substrate":"Polyester",
                    "Description":"All-in one for Polyester",
                },
                {
                    "sno":"7",
                    "Product":"Enlev SMKI",
                    "Substrate":"Wool & Silk &nyIon",
                    "Description":"Levelling agent for metal complex dyes, and wool reactive dyes ",
                },
                {
                    "sno":"8",
                    "Product":"Enlev FBSE",
                    "Substrate":"Wool & Silk &nyIon ",
                    "Description":"Levelling agent for acid dyes",
                },
                {
                    "sno":"9",
                    "Product":"Retarder ACR Conc",
                    "Substrate":"Acrylic",
                    "Description":"Conc. Retarder for acrylic",
                },
                {
                    "sno":"10",
                    "Product":"Retarder ACR",
                    "Substrate":"Acrylic",
                    "Description":"Retarder for Acrylic",
                },
                {
                    "sno":"11",
                    "Product":"Retarder ARL",
                    "Substrate":"Acrylic",
                    "Description":"Retarder for Acrylic",
                },
                {
                    "sno":"12",
                    "Product":"Enlev LSLW PDR",
                    "Substrate":"Cotton",
                    "Description":"All in one, for Lubricants, sequestering, levelling, and washing off ",
                },
            ],    
        },
        {
            "heading":"Washing Off / Soaping Agent",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dapibus pharetra feugiat convallis nunc quam quis nisl. Gravida diam quam nec mauris mi aliquam mi. Viverra ipsum cursus fringilla curabitur. Consequat, porta quis fringilla adipiscing sapien viverra. In sit fusce mattis eu sit integer et nisl. Massa id adipiscing dictum pulvinar dolor tincidunt. Purus vitae, morbi sed semper leo. Egestas sagittis, iaculis egestas ut tellus vitae eget. Risus purus sit nisl faucibus vitae. At.",
            "list":[
                {
                    "sno":"1",
                    "Product":"Wash RD PDR",
                    "Substrate":"Cotton & blends",
                    "Description":"Excellent soaping agent, enhances the rubbing fastness of the fabric, also increases the shine effect ",
                },
                {
                    "sno":"2",
                    "Product":"Wash off CO 30",
                    "Substrate":"Cotton & blends",
                    "Description":"Excellent soaping agent, enhances the rubbing fastness of the fabric, also increases the shine effect ",
                },
                {
                    "sno":"3",
                    "Product":"Wash SL",
                    "Substrate":"Synthetic and blends",
                    "Description":"Removes the excess dyestuff on the surface of the fabric to increase the rubbing fastness. ",
                },
                {
                    "sno":"4",
                    "Product":"NEG Lithi Core",
                    "Substrate":"Polyester",
                    "Description":"Reduction clearing agent in acidic medium",
                },
                {
                    "sno":"5",
                    "Product":"Ecotreat 100 L",
                    "Substrate":"Polyester",
                    "Description":"Reduction clearing agent in acidic medium",
                },
            ],
        },
        {
            "heading":"Finishing Agents",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dapibus pharetra feugiat convallis nunc quam quis nisl. Gravida diam quam nec mauris mi aliquam mi. Viverra ipsum cursus fringilla curabitur. Consequat, porta quis fringilla adipiscing sapien viverra. In sit fusce mattis eu sit integer et nisl. Massa id adipiscing dictum pulvinar dolor tincidunt. Purus vitae, morbi sed semper leo. Egestas sagittis, iaculis egestas ut tellus vitae eget. Risus purus sit nisl faucibus vitae. At.",
            "list":[
                {
                    "sno":"1",
                    "Product":"Ensoft CWS",
                    "Substrate":"Cotton & Blends",
                    "Description":"Cationic Flakes",
                },
                {
                    "sno":"2",
                    "Product":"Ensoft SKI",
                    "Substrate":"Silk & Wool",
                    "Description":"Cationic softner specially suitable for silk and wool ",
                },
                {
                    "sno":"3",
                    "Product":"Ensoft OC",
                    "Substrate":"Cotton & Blends",
                    "Description":"Cationic non-yellowing softner",
                },
                {
                    "sno":"4",
                    "Product":"Ensoft TWS",
                    "Substrate":"Cotton & Denim",
                    "Description":"Tallow softner, hydrophilic gives smooth feel ",
                },
                {
                    "sno":"5",
                    "Product":"Ensoft RW",
                    "Substrate":"Cotton & Blends",
                    "Description":"Reactive softner with hydrophilic in nature ",
                },
                {
                    "sno":"6",
                    "Product":"Alsil Ultra",
                    "Substrate":"Cotton & Blends",
                    "Description":"Micro amino silicone softner for inner and outer softness ",
                },
                {
                    "sno":"7",
                    "Product":"Ensil N Plus",
                    "Substrate":"Cotton & Blends",
                    "Description":"Hydrophilic Silicon Softner",
                },
                {
                    "sno":"8",
                    "Product":"Ensil MM",
                    "Substrate":"Cotton & Blends, Denim ",
                    "Description":"Micro & Macro Silicon softner for denim. ",
                },
                {
                    "sno":"9",
                    "Product":"Ensoft ACR",
                    "Substrate":"Anionic Softner",
                    "Description":"Acrylic",
                },
            ],
        },
        {
            "heading":"Substitute",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dapibus pharetra feugiat convallis nunc quam quis nisl. Gravida diam quam nec mauris mi aliquam mi. Viverra ipsum cursus fringilla curabitur. Consequat, porta quis fringilla adipiscing sapien viverra. In sit fusce mattis eu sit integer et nisl. Massa id adipiscing dictum pulvinar dolor tincidunt. Purus vitae, morbi sed semper leo. Egestas sagittis, iaculis egestas ut tellus vitae eget. Risus purus sit nisl faucibus vitae. At.",
            "list":[
                {
                    "sno":"1",
                    "Product":"Polyacid GAO",
                    "Substrate":"Any substrate",
                    "Description":"Acetic acid replacement",
                },
                {
                    "sno":"2",
                    "Product":"Dyeaux Soda",
                    "Substrate":"Cotton",
                    "Description":"Soda ash replacement for reactive dyes ",
                },
                {
                    "sno":"3",
                    "Product":"Neutrafab SS",
                    "Substrate":"Cotton",
                    "Description":"Sodium Sulphide replacement",
                },
                {
                    "sno":"4",
                    "Product":"Neutrafab PD",
                    "Substrate":"Cotton",
                    "Description":"Sulphur neutralising agent",
                },
            ],
        },
        {
            "heading":"Printing Series",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dapibus pharetra feugiat convallis nunc quam quis nisl. Gravida diam quam nec mauris mi aliquam mi. Viverra ipsum cursus fringilla curabitur. Consequat, porta quis fringilla adipiscing sapien viverra. In sit fusce mattis eu sit integer et nisl. Massa id adipiscing dictum pulvinar dolor tincidunt. Purus vitae, morbi sed semper leo. Egestas sagittis, iaculis egestas ut tellus vitae eget. Risus purus sit nisl faucibus vitae. At.",
            "list":[
                {
                    "sno":"1",
                    "Product":"NEG-WHITE 1K",
                    "Substrate":"Cotton & Blends",
                    "Description":"Khadi Binder",
                },
                {
                    "sno":"2",
                    "Product":"NEG-CLEAR 1K",
                    "Substrate":"Cotton & Blends",
                    "Description":"Clear",
                },
                {
                    "sno":"3",
                    "Product":"NEG-WHITE 2K",
                    "Substrate":"Cotton & Blends",
                    "Description":"Khadi Binder",
                },
                {
                    "sno":"4",
                    "Product":"NEG-CLEAR 2K",
                    "Substrate":"Cotton & Blends",
                    "Description":"Clear",
                },
                {
                    "sno":"5",
                    "Product":"NEG-WHITE 3K",
                    "Substrate":"Cotton & Blends",
                    "Description":"Khadi Binder",
                },
                {
                    "sno":"6",
                    "Product":"NEG-CLEAR 1K",
                    "Substrate":"Cotton & Blends",
                    "Description":"Clear",
                },
                {
                    "sno":"7",
                    "Product":"NEG-PIGMENT120",
                    "Substrate":"Cotton & Blends",
                    "Description":"All in one for pigment printing",
                },
                {
                    "sno":"8",
                    "Product":"NEG-B4KSPL",
                    "Substrate":"Cotton & Blends",
                    "Description":"Binder 38% with formaldehyde",
                },
                {
                    "sno":"9",
                    "Product":"NEG-B5K ECO",
                    "Substrate":"Cotton & Blends",
                    "Description":"Binder 50% with formaldehyde",
                },
                {
                    "sno":"10",
                    "Product":"NEG-TKN",
                    "Substrate":"Cotton & Blends",
                    "Description":"Thickener for pigment printing",
                },
                {
                    "sno":"11",
                    "Product":"NEG-FIXER",
                    "Substrate":"Cotton & Blends",
                    "Description":"Fixer for Pigment printing",
                },
                {
                    "sno":"12",
                    "Product":"NEG-SOFTSIL",
                    "Substrate":"Cotton & Blends",
                    "Description":"Softner for prints",
                },
                {
                    "sno":"13",
                    "Product":"NEG-CW DC",
                    "Substrate":"Cotton & Blends",
                    "Description":"Discharge print",
                },
                {
                    "sno":"14",
                    "Product":"Discharge print",
                    "Substrate":"Cotton & Blends",
                    "Description":"Discharge print",
                },
                {
                    "sno":"15",
                    "Product":"NEG-INDIGO DC",
                    "Substrate":"Denim",
                    "Description":"Indigo Discharge",
                },
            ],
        },
        {
            "heading":"Knitting",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dapibus pharetra feugiat convallis nunc quam quis nisl. Gravida diam quam nec mauris mi aliquam mi. Viverra ipsum cursus fringilla curabitur. Consequat, porta quis fringilla adipiscing sapien viverra. In sit fusce mattis eu sit integer et nisl. Massa id adipiscing dictum pulvinar dolor tincidunt. Purus vitae, morbi sed semper leo. Egestas sagittis, iaculis egestas ut tellus vitae eget. Risus purus sit nisl faucibus vitae. At.",
            "list":[
                {
                    "sno":"1",
                    "Product":"KMTWASH9K",
                    "Substrate":"",
                    "Description":"High Performance Knitting oil",
                },
                {
                    "sno":"2",
                    "Product":"KMTWASH3K",
                    "Substrate":"",
                    "Description":"High Performance Knitting oil",
                },
            ],
        },
        {
            "heading":"Sequestering Agents",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dapibus pharetra feugiat convallis nunc quam quis nisl. Gravida diam quam nec mauris mi aliquam mi. Viverra ipsum cursus fringilla curabitur. Consequat, porta quis fringilla adipiscing sapien viverra. In sit fusce mattis eu sit integer et nisl. Massa id adipiscing dictum pulvinar dolor tincidunt. Purus vitae, morbi sed semper leo. Egestas sagittis, iaculis egestas ut tellus vitae eget. Risus purus sit nisl faucibus vitae. At.",
            "list":[
                {
                    "sno":"1",
                    "Product":"Sequester CL",
                    "Substrate":"Any",
                    "Description":"Chelates Ca++, Mg++& Fe++",
                },
                {
                    "sno":"2",
                    "Product":"Sequester N",
                    "Substrate":"Any",
                    "Description":"Fe++ Ca++ & Mg++",
                },
                {
                    "sno":"3",
                    "Product":"Sequester 2UDY",
                    "Substrate":"Cotton",
                    "Description":"Protonoic treatment",
                },
            ],
        },
        {
            "heading":"Lubricants / Anti-crease",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dapibus pharetra feugiat convallis nunc quam quis nisl. Gravida diam quam nec mauris mi aliquam mi. Viverra ipsum cursus fringilla curabitur. Consequat, porta quis fringilla adipiscing sapien viverra. In sit fusce mattis eu sit integer et nisl. Massa id adipiscing dictum pulvinar dolor tincidunt. Purus vitae, morbi sed semper leo. Egestas sagittis, iaculis egestas ut tellus vitae eget. Risus purus sit nisl faucibus vitae. At.",
            "list":[
                {
                    "sno":"1",
                    "Product":"Lube ACR",
                    "Substrate":"Cotton/Polyester",
                    "Description":"Phosphate base",
                },
                {
                    "sno":"2",
                    "Product":"Prewet SPLF",
                    "Substrate":"Cotton/Polyester",
                    "Description":"Polymer base",
                },
            ],
        },
        {
            "heading":"Fixing Agent",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dapibus pharetra feugiat convallis nunc quam quis nisl. Gravida diam quam nec mauris mi aliquam mi. Viverra ipsum cursus fringilla curabitur. Consequat, porta quis fringilla adipiscing sapien viverra. In sit fusce mattis eu sit integer et nisl. Massa id adipiscing dictum pulvinar dolor tincidunt. Purus vitae, morbi sed semper leo. Egestas sagittis, iaculis egestas ut tellus vitae eget. Risus purus sit nisl faucibus vitae. At.",
            "list":[
                {
                    "sno":"1",
                    "Product":"Dyfix WFF",
                    "Substrate":"Cotton",
                    "Description":"Concentrated fixing agent for reacGve dyes (Non-formaldehyde) ",
                },
                {
                    "sno":"2",
                    "Product":"Dyfix NF",
                    "Substrate":"Cotton",
                    "Description":"Non-formaldehyde dye fixing agent for reactive dyes ",
                },
                {
                    "sno":"3",
                    "Product":"Dyfix RN",
                    "Substrate":"Silk",
                    "Description":"Dyehxing agent for silk.",
                },
            ],
        },
        {
            "heading":"Enzymes",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dapibus pharetra feugiat convallis nunc quam quis nisl. Gravida diam quam nec mauris mi aliquam mi. Viverra ipsum cursus fringilla curabitur. Consequat, porta quis fringilla adipiscing sapien viverra. In sit fusce mattis eu sit integer et nisl. Massa id adipiscing dictum pulvinar dolor tincidunt. Purus vitae, morbi sed semper leo. Egestas sagittis, iaculis egestas ut tellus vitae eget. Risus purus sit nisl faucibus vitae. At.",
            "list":[
                {
                    "sno":"1",
                    "Product":"Enzyme CL",
                    "Substrate":"Cotton knits & denims ",
                    "Description":"Neutral enzyme under broad pH ",
                },
                {
                    "sno":"2",
                    "Product":"Enzyme AC",
                    "Substrate":"Cotton knits & denims ",
                    "Description":"Acid Enzyme with excellent puckering ",
                },
                {
                    "sno":"3",
                    "Product":"Enzyme PK",
                    "Substrate":"Cotton",
                    "Description":"Peroxide Killer enzymatic",
                },
                {
                    "sno":"4",
                    "Product":"Desizer AM",
                    "Substrate":"Cotton woven & Garments",
                    "Description":"Desizing enzyme can operate in wide pH range and stable at high temperature ",
                },
            ],
        },
        {
            "heading":"Speciality Chemicals",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dapibus pharetra feugiat convallis nunc quam quis nisl. Gravida diam quam nec mauris mi aliquam mi. Viverra ipsum cursus fringilla curabitur. Consequat, porta quis fringilla adipiscing sapien viverra. In sit fusce mattis eu sit integer et nisl. Massa id adipiscing dictum pulvinar dolor tincidunt. Purus vitae, morbi sed semper leo. Egestas sagittis, iaculis egestas ut tellus vitae eget. Risus purus sit nisl faucibus vitae. At.",
            "list":[
                {
                    "sno":"1",
                    "Product":"Anti fungal Agents Prewet AF",
                    "Substrate":"Cotton & Blends",
                    "Description":"To prevent the of fungus, or mist & dew ",
                },
                {
                    "sno":"2",
                    "Product":"Moth Proofing agent Prewet MF ",
                    "Substrate":"Wool & Silk",
                    "Description":"To prevent the protien fibres from moth or insects ",
                },
                {
                    "sno":"3",
                    "Product":"Flame Retarding Prewet FR",
                    "Substrate":"Cotton & Polyester ",
                    "Description":"Treatment for fire proof ",
                },
                {
                    "sno":"4",
                    "Product":"Fragnance Finish Prewet F ",
                    "Substrate":"Cotton & Polyester ",
                    "Description":"Different types of fragnance specially for Home furnish ",
                },
                {
                    "sno":"5",
                    "Product":"UV Treatment Prewet UV",
                    "Substrate":"Cotton & Polyester ",
                    "Description":"To prevent the colour to get faded due to ultra violet rays",
                },
                {
                    "sno":"6",
                    "Product":"Anti-Ozonate Softners Ensoft AOS ",
                    "Substrate":"Cotton & Polyester ",
                    "Description":"To prevent yellowing for long stack up of the finish product",
                },
            ],
        },
        {
            "heading":"Spinning",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dapibus pharetra feugiat convallis nunc quam quis nisl. Gravida diam quam nec mauris mi aliquam mi. Viverra ipsum cursus fringilla curabitur. Consequat, porta quis fringilla adipiscing sapien viverra. In sit fusce mattis eu sit integer et nisl. Massa id adipiscing dictum pulvinar dolor tincidunt. Purus vitae, morbi sed semper leo. Egestas sagittis, iaculis egestas ut tellus vitae eget. Risus purus sit nisl faucibus vitae. At.",
            "list":[
                {
                    "sno":"1",
                    "Product":"SPIN CTX",
                    "Substrate":"",
                    "Description":"Antistatic oil for Synthetics",
                },
                {
                    "sno":"2",
                    "Product":"SPIN CSO",
                    "Substrate":"",
                    "Description":"Antistatic oil for synthetic and Cotton ",
                },
                {
                    "sno":"3",
                    "Product":"SPIN 9K",
                    "Substrate":"",
                    "Description":"Antistatic oil for Wool & blends ",
                },
                {
                    "sno":"4",
                    "Product":"Spin CO",
                    "Substrate":"",
                    "Description":"conning oil for high speed texturising machine ",
                },
            ],
        },
    ];

    return (
        <div className="explaination container-fluid mt-5 pt-5 overflow-hidden">
            <div className="row g-0">
                <div className="col-12 hero-banner d-flex align-items-center justify-content-center">
                <img src={image1} alt={data[1].heading} className="banner__img" />
                </div>
            </div>
            <p className="heading">{data[1].heading}</p>
            <div className="row g-0">
						<div className="col-md-6 col-12 mx-auto mb-5">
							<p className="text-center mb-3 p-4">
								{data[1].description}
							</p>
						</div>
					</div>
            <Table striped variant="info">
                  <thead>
                    <tr>
                      <th>S NO.</th>
                      <th>Product</th>
                      <th>Substrate</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                    <tbody>
                {data[Number(location.index)].list.map((x,index)=>
                        <tr key={index}>
                            <td>{x.sno}</td>
                            <td>{x.Product}</td>
                            <td>{x.Substrate}</td>
                            <td>{x.Description}</td>
                        </tr>
                    )}
                    </tbody>
            </Table>
        </div>
    )
};

export default Explaination;
