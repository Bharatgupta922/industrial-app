import React from 'react';
import image1 from "./../../images/banner.png";
import "./Explore.css";
import image2 from "./../../images/water_Image.png";
const Explore = () => {
    const data = {
        "heading_1":{
            "title":"WORKING PRINCIPLE OF ETP",
            "para_1":"The Effluent Treatment Plant (ETP) is designed to ensure the removal of dissolved and suspended organic matter and many other contaminants present in waste water such as BOD, COD, TSS, AMMONIA, OIL & GREASE which are generated from various industrial waste water processes. The environmental conditions are optimized in the ETP to encourage the growth of micro-organisms which consume these organic materials as their food for growth and multiplicaon which further help in providing water as per PCB norms. The ETP is also capable for removal of other contaminants present in waste water including suspended solids, nitrogen, phosphorous during various stages of treatment.",
            "para_2":"On the basis of requirement of oxygen bacteria is classified as AEROBIC BACTERIA and ANAEROBIC BACTERIA. Aerobic bacteria necessarily require oxygen for their life process however, the anaerobic bacteria can survive without oxygen.",
            "para_3":" Accordingly on the basis of types of bacteria used in ETP the basic treatment process are classified as AEROBIC TREATMENT and ANAEROBIC TREATMENT.",
        },
        "heading_2":{
            "title":"THE ANAEROBIC PROCESS",
            "para_1":"The Anaerobic process is basically the natural phenomenon of fermentation in which organic materials are degraded by micro-organism without consuming oxygen. This results the production of carbon dioxide and methane. ",
            "para_2":" Anaerobic digestion consists of several interdependent, complex sequential and parallel biological reactions, during which the products from one group of micro-organisms serve as the substrates for the next, resulting in transformation of organic matter mainly into a mixture of methane and carbon dioxide. ",
            "para_3":"Anaerobic digeson takes place in four phases: hydrolysis/liquefaction, acidogenesis, acetogenesis and methanogenesis. To ensure a balanced digestion process it is important that the various biological conversion processes remain sufficiently coupled during the process so as to avoid the accumulation of any intermediates in the system. ",
        },
        "heading_3":{
            "title":"HIGHLIGHTS OF TREATMENT CONCEPT",
            "para_1":" Reduction of operating cost by reduces Chemical 70 to 80%.(In few case we have removed chemical Treatment) 10. ",
            "para_2":"Reduction Of BOD & COD Up to 95 %.",
            "para_3":"Reduces Hardness as well as other organic contaminaon including oil & grease. ",
            "para_4":"After reduction of BOD & COD the Efficiency of RO will increase 10 to 15%. ",
            "para_5":" Reduction of chemical sludge 70%",
        },
        "heading_4":{
            "title":"HIDDEN BENEFITS",
            "para_1":"Sludge reduction 40 %. thus the running me of filter press machine will come down automatically.",
            "para_2":"Reduces sludge disposal cost 60%.",
            "para_3":"Less Iron/Alumina content carries over and protects RO Membrane. ",
            "para_4":"RO Efficiency will be increase.",
            "para_5":"The TDS, Conducvity and Hardness of treated water will be reduce as the consumption of chemicals. ",
            "para_6":" After Reduction of Sludge 60 % the detention time of settling tank will increase and it will help to increase the efficiency of settling tank. ",
            "para_7":"After reducing the sludge 60% the life of filter media and otherrelated facilities will increase.Secondly the time of back wash shall also decreases. Similarly in this way we can save the back wash water that is around 1% of the total water. ",
        },
        "heading_5":{
            "title":"PROPOSED TREATMENT CONCEPT",
            "para_1":"We will start to treat 1700 KL/day. First of all raw effluent after ph correction i.e. 9 will go in to the existing Equalization. Now this tank will work as anaerobic digester. Here we will add anaerobic culture (NEG Organic) approx.25 kg per day up to commissioning period (5-6 days.). After commissioning the doses of culture will be reduces up to 20 kg per day for 1700 KLD treatment. For 1700 KLD treatment we require minimum 24-30hrs. retention time. After 24-30hrs retention time anaerobic treated effluent now ready for aerobic treatment in existing treatment facilities. After anaerobic digester the waste water will not enter in to the existing Biological reactor and after treatment it will be ready for further use. By this way we can improve the efficiency of existing ETP as well as reduce the operating cost.",
        },
        "heading_6":{
            "title":"SPECIALITY CHEMICALS TO BE USE:-",
            "para_1":"New Era Global Pvt ltd offers you a ready to use microbial culture which helps to improve biodegradation and in term allows for higher flows / organic loads to be treated. It is effectively used in various industries like textile, Chemicals, Pharmaceuticals, Agro, Specialty chemicals, Food processing, Dairy, Pulp, & Paper industries, Automobiles and even for CETPs. ",
            "para_2":"Anaerobic microbial cultures are easy to use and do not require any pre-treatment and can be used directly as and when required, even in unsealed condition. ",
            "para_3":"These microbial culture are effectively used in anaerobic industrial effluent treatment and systems (anaerobic digester & n fill tower for Chemical, Pharmaceutical & Many other industries where the effluent is difficult to treat. The culture consists of a blend of micro organisms which are non-pathogenic, saprophytic and fast growing. They act by converting the complex long chain organic compounds to simple sugars, which are further converted into Methane & water. If used in combination with Enzymes, (marketed by New Era Global Pvt. Ltd.) they are still more effective. ",
        },
        "heading_7":{
            "title":"SPECIFICATIONS",
            "para_1":{
                "title":"Bacterial count",
                "description":"10 / ml culture",
            },
            "para_2":{
                "title":"Product Stability",
                "description":"Stable for 24 months under recommended storage conditions ",
            },
            "para_3":{
                "title":"Appearance",
                "description":"Dark Brown to Black turbid liquid. pH : 4.5 +1- ",
            },
            "para_4":{
                "title":"Temp",
                "description":"15⁰C to 65⁰C",
            },
            "para_5":{
                "title":"Recommended Storage",
                "description":"Avoid direct sunlight.",
            },
        },
        "heading_8":{
            "title":"Safety",
            "para_1":"Do not inhale or ingest",
            "para_2":"Use hand gloves & face masks while handling the product",
            "para_3":"Wash hands with soap & plenty of water",
            "para_4":"In case of any problem, refer to physician",
            "para_5":"Avoid exposure to open while handling the product.",
            "para_6":"Flush spills with plenty of water.",
        },
        "heading_9":{
            "title":"Quality control",
            "para_1":"Store in shade at ambient temperatures.",
            "para_2":"All Products are manufactured under strict process control & as per standard practices .If gas formation observed, pin a hole to inner cap of Container & release the gas. ",
        },
    };
    
    return (

        <div className="explore container-fluid mt-5 pt-5">
                <div className="row">
					<div className="col-md-10 col-12 mx-auto">
						<img src={image1} alt="banner img" className="banner-img" />
					</div>
				</div>
                <div className="headings">
                <p className="card-title">Waste Water Treatment Process</p>
                <p className="card-text">(CETP / ETP / STP)</p>
                </div>
                <div className="container main__section">
					<div class="row">
                    <div class="col">
						<div class="card h-100">
							<div class="card-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm">
                                            <p class="card-title">{data.heading_1.title}</p>
                                            <img src = {image2} alt="water image" className="water-img" />
                                        </div>
                                        <div className="col-sm">
                                        <p className="card-text first__para"> {data.heading_1.para_1} </p>
                                        </div>
                                    </div>
                                </div>
                                     <p className="card-text"> {data.heading_1.para_2} </p>
                                     <p className="card-text"> {data.heading_1.para_3} </p>
                                     <p className="card-title"> {data.heading_2.title} </p>
                                     <p className="card-text"> {data.heading_2.para_1} </p>
                                     <p className="card-text"> {data.heading_2.para_2} </p>
                                     <p className="card-text"> {data.heading_2.para_3} </p>
                                     <p className="card-title"> {data.heading_3.title} </p>
                                     <p className="card-text">1. {data.heading_3.para_1} </p>
                                     <p className="card-text">2. {data.heading_3.para_2} </p>
                                     <p className="card-text">3. {data.heading_3.para_3} </p>
                                     <p className="card-text">4. {data.heading_3.para_4} </p>
                                     <p className="card-text">5. {data.heading_3.para_5} </p>

                                     <p className="card-title"> {data.heading_4.title} </p>
                                     <p className="card-text">1. {data.heading_4.para_1} </p>
                                     <p className="card-text">2. {data.heading_4.para_2} </p>
                                     <p className="card-text">3. {data.heading_4.para_3} </p>
                                     <p className="card-text">4. {data.heading_4.para_4} </p>
                                     <p className="card-text">5. {data.heading_4.para_5} </p>
                                     <p className="card-text">6. {data.heading_4.para_6} </p>
                                     <p className="card-text">7. {data.heading_4.para_7} </p>
                                     <p className="card-title"> {data.heading_5.title} </p>
                                     <p className="card-text"> {data.heading_5.para_1} </p>
                                     <p className="card-title"> {data.heading_6.title} </p>
                                     <p className="card-text"> {data.heading_6.para_1} </p>
                                     <p className="card-text"> {data.heading_6.para_2} </p>
                                     <p className="card-text"> {data.heading_6.para_3} </p>

                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm">
                                                    <p className="card-title">  {data.heading_7.title} </p>
                                                       <p className="card-text"> ●  {data.heading_7.para_1.title} : {data.heading_7.para_1.description} </p>
                                                       <p className="card-text"> ●  {data.heading_7.para_2.title} : {data.heading_7.para_2.description} </p>
                                                       <p className="card-text"> ●  {data.heading_7.para_3.title} : {data.heading_7.para_3.description} </p>
                                                       <p className="card-text"> ●  {data.heading_7.para_4.title} : {data.heading_7.para_4.description} </p>
                                                       <p className="card-text"> ●  {data.heading_7.para_5.title} : {data.heading_7.para_5.description} </p>
                                                    </div>
                                                    <div className="col-sm">
                                                      <p className="card-title"> {data.heading_8.title} </p>
                                                      <p className="card-text"> ●  {data.heading_8.para_1} </p>
                                                      <p className="card-text"> ●  {data.heading_8.para_2} </p>
                                                      <p className="card-text"> ●  {data.heading_8.para_3} </p>
                                                      <p className="card-text"> ●  {data.heading_8.para_4} </p>
                                                      <p className="card-text"> ●  {data.heading_8.para_5} </p>
                                                      <p className="card-text"> ●  {data.heading_8.para_6} </p>
                                                    </div>
                                                </div>
                                            </div>
                                     <p className="card-title"> {data.heading_9.title} </p>
                                     <p className="card-text"> {data.heading_9.para_1} </p>
                                     <p className="card-text"> {data.heading_9.para_2} </p>
							</div>
						</div>
					</div>
					</div>
				</div>

            					
        </div>
    )
}

export default Explore
