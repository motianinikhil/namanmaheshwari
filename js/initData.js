var DATA = {
  "WORK": [
   {
      "duration": "Aug 2017 - Present",
      "shortTitle": "Graduate Teaching Assistant, The University of Texas at Austin",
      "shortDesc": [
        "I am currently working as a Graduate Teaching Assistant for the Digital Logic Design course at the University of Texas at Austin."
      ],
      "additionalInfo": {
        "dataRef": "UTFull",
        "linkText": "Read More ...",
        "data": {
          "title": "University of Texas, Austin (Aug 2017 - Present)",
          "messageHead": "<strong>Graduate Teaching Assistant</strong>",
          "messageList": [
            "Working as a T.A. for the course EE 316 (Digital Logic Design) and doing the development of the labs based on designing in Verilog and simulation on Basys FPGA board"
          ]
        }
      }
    },
	{
      "duration": "Jul 2015 - Jul 2017",
      "shortTitle": "Digital Design Engineer, Texas Instruments, India",
      "shortDesc": [
        "I worked for two years as a Digital Design Engineer in the Automotive Radar Design-for-Testability team at Texas Instruments, Bangalore, India."
      ],
      "additionalInfo": {
        "dataRef": "texasFull",
        "linkText": "Read More ...",
        "data": {
          "title": "Texas Instruments, India (Jul 2015 - Jul 2017)",
          "messageHead": "<strong>Digital Design Engineer, Design-for-Testability Team, Automotive-Radar chip</strong>",
          "messageList": [
            "Implemented the Built-In Self-Test (BIST) mechanism for memories for a complex design with 250+ memories <ul class='lowspace'><li>Implemented the architecture for memory testing during production as well as field testing</li><li>Verification of multiple fault-detection algorithms on all the memories in the design across multiple process corners, with high-security considerations and test-time optimization techniques like concurrent testing of memories</li></ul>",
            "Generated test patterns for advanced fault models like Small Delay Defect (SDD) & Path Delay, and measured the test quality by fault simulating across various fault models, thus improving test quality and optimizing pattern count",
            "Automatic Test Pattern Generation (ATPG) for critical IPs in the design which are under the scope of Self-Test for automotive safety and implemented novel techniques like Low-Power Scan for scan-shift power reduction by 43%",
            "Invented and implemented a novel JTAG-based Hybrid Multiple Input Signature Register (H-MISR) which aids in seamless debug and diagnosis of MISR-based scan compression patterns without the need of exclusive long-chain mode"
          ]
        }
      }
    },
    {
      "duration": "Jan 2015 - Jun 2015",
      "shortTitle": "Digital Design Intern, Texas Instruments, India",
      "shortDesc": [
        "In my final semester at BITS-Pilani, I interned at Texas Instruments, Bangalore, India in the Automotive Radar Design-for-Testability team."
      ],
      "additionalInfo": {
        "dataRef": "texasIntern",
        "linkText": "Read More ...",
        "data": {
          "title": "Texas Instruments, India (Jan 2015 - Jun 2015)",
          "messageHead": "<strong>Digital Design Intern, Design-for-Testability Team, Automotive-Radar chip</strong>",
          "messageList": [
            "Designed and implemented Context Save Restore Mechanism to preserve the content of critical functional registers in the design during on-the fly test of IPs through self-test controller",
            "Built an automated infrastructure to create a ROM image containing patterns and golden MISR signatures for various operational modes for IPs under the scope of self-test, implemented based on On-Product MISR (OPMISR) codec with Low Power Scan Architecture. The flow also provides novel support of per cycle debug/diagnosis capability which does not exist with ATPG tool natively"
          ]
        }
      }
    },
    {
      "duration": "May 2014 - Jul 2014",
      "shortTitle": "Visiting Research Scholar, University of Alberta",
      "shortDesc": [
        "At the end of my junior year at BITS-Pilani, I was selected as a Mitacs Globalink scholar for a research internship at the University of Alberta, Canada, in Dr. Jie Han’s group where I worked on Approximate Computing."
      ],
      "additionalInfo": {
        "dataRef": "mitacsIntern",
        "linkText": "Read More ...",
        "data": {
          "title": "University of Alberta, Canada (May 2014 - Jul 2014)",
          "messageHead": "<strong>Visiting Research Scholar, Department of Electrical and Computer Engineering</strong>",
          "messageList": [
            "Comparative Study of 16X16 approximate multipliers by implementing the designs in VHDL to calculate design metrics (power, delay and area) using Synopsys Design Suite, and in MATLAB to calculate accuracy metrics (error distance and error rate) by running Monte Carlo simulations",
            "Proposed novel 8X8 multiplier designs based on approximate 4:2 compressors which achieved an improvement of approximately 80% in terms of accuracy and 5% power reduction over the existing approximate compressor based designs"
          ]
        }
      }
    },
    {
      "duration": "Aug 2013 - Dec 2014",
      "shortTitle": "Professional/Teaching Assistant, BITS-Pilani",
      "shortDesc": [
        "During my undergraduate studies at BITS-Pilani, I was selected as the Professional/Teaching Assistant for four courses."
      ],
      "additionalInfo": {
        "dataRef": "collegeTA",
        "linkText": "Read More ...",
        "data": {
          "title": "BITS-Pilani, Pilani Campus, India (Aug 2013 - Dec 2014)",
          "messageHead": "<strong>Professional/Teaching Assistant</strong>",
          "messageList": [
            "Worked as a T.A. for Microprocessors Programming & Interfacing, Analog & Digital VLSI Design, Microelectronic Circuits and Signals & Systems and helped students in learning software like Proteus, Cadence Virtuoso, LT-Spice and MATLAB",
            "Conducted demo lab sessions and tests and assisted students with the design assignments"
          ]
        }
      }
    }
  ],
  "EDUCATION": [
    {
      "duration": "Master of Science, Class of 2019",
      "shortTitle": "Electrical and Computer Engineering, UT Austin",
      "shortDesc": [
        "<strong> CGPA: Not Available</strong><p>The University of Texas at Austin <ul><li  type='square'><strong>Relevant Coursework: </strong>VLSI-1, Dependable Computing</li></ul></p>"
      ]
    },
    {
      "duration": "B.E. (Hons.), 2011-2015",
      "shortTitle": "Electrical & Electronics Engg, BITS-Pilani, India",
      "shortDesc": [
        "<strong> CGPA: 9.31/10.0</strong><p>Birla Institute of Technology and Science (BITS)-Pilani, Pilani Campus, India <ul><li  type='square'>Among the top 10 students in Electrical, Electronics & Instrumentation Departments in a batch of 150 students </li></p>"
      ]
    }
  ],
  "PORTFOLIO": {
    "PROJECTS": [
      {
        "title": "Implementation of 16x16 Compressor Based Approximate Multipliers",
        "duration": "Aug 2014 - Dec 2014",
        "report": "./docs/16x16MulDesign.pdf",
        "message": [
          "Proposed and implemented compressor based 16x16 approximate multipliers using the technique of recursive multiplication in VHDL and MATLAB and compared them on the basis of accuracy and circuit metrics (power, area and delay)",
          "Proposed designs achieve approximately 50% reduction in power and 20% reduction in circuit area over the accurate compressor based design"
        ],
        "footer": "<strong>Guide:</strong> <a href='http://bits-pilani.ac.in/pilani/sguru/profile'>Dr. S. Gurunarayanan</a>, Professor, Dept. of Electrical & Electronics Engg and Dean, Admissions and Work Integrated Learning Programmes (WILP), BITS-Pilani"
      },

      {
        "title": "Building a Virtual Lab",
        "duration": "Aug 2014 - Dec 2014<br /><div class='pull-right-lg'><a href='./docs/VirtualLab.zip'>Project Report</a></div>",
        "message": [
          "Built a Virtual Lab on open source software like Electric VLSI and Scilab for WILP students of BITS-Pilani"
        ],
        "footer": "<strong>Guide:</strong> <a href='http://bits-pilani.ac.in/pilani/sguru/profile'>Dr. S. Gurunarayanan</a>, Professor, Dept. of Electrical & Electronics Engg and Dean, Admissions and Work Integrated Learning Programmes (WILP), BITS-Pilani"
      },

      {
        "title": "Operational Amplifier Design",
        "duration": "Aug 2013 - Dec 2013",
        "report": "./docs/OpAmpDesign.pdf",
        "message": [
          "Designed & simulated a two stage folded cascode op-amp and met challenging specifications of gain, bandwidth and phase margin on Cadence Virtuoso ADE and Spectre Circuit Simulator"
        ],
        "footer": "<strong>Guide:</strong> <a href='http://bits-pilani.ac.in/pilani/anug/profile'>Dr. Anu Gupta</a>, Associate Professor, Head of Dept. of Electrical & Electronics Engg, BITS-Pilani"
      },

      {
        "title": "3-input AND/NAND Gate Design",
        "duration": "Aug 2013 - Dec 2013",
        "report": "./docs/AndGateDesign.pdf",
        "message": [
          "Designed a 3-input AND/NAND gate using pass transistor logic to achieve desired functionality",
          "Prepared its layout on Cadence Virtuoso Layout Suite, thus gaining an experience on how the circuits are fabricated"
        ],
        "footer": "<strong>Guide:</strong> <a href='http://bits-pilani.ac.in/pilani/anug/profile'>Dr. Anu Gupta</a>, Associate Professor, Head of Dept. of Electrical & Electronics Engg, BITS-Pilani"
      },

      {
        "title": "Signal Processing Techniques for Structural Health Monitoring (SHM)",
        "duration": "Aug 2013 - Dec 2013",
        "report": "./docs/SHM.pdf",
        "message": [
          "Studied various stages of SHM and different signal processing techniques used at every stage",
          "Implemented Discrete Wavelet Transform used for SHM in MATLAB and VHDL"
        ],
        "footer": "<strong>Guide:</strong> <a href='http://www.ceeri.res.in/staff/scientists/ksr.html'>Dr. Kota Solomon Raju</a>, Scientist, Digital Systems Group, Central Electronics Engineering Research Institute (CEERI)-Pilani"
      },

      {
        "title": "Biometric Analysis using Iris Recognition",
        "duration": "Jan 2013 - May 2013",
        "report": "./docs/IrisRecognition.pdf",
        "message": [
          "Implemented an Iris Recognition algorithm, employing pattern recognition algorithms using image processing toolbox in MATLAB and built an automated code for reading images from the MMU database for image matching"
        ],
        "footer": "<strong>Guide:</strong> <a href='http://bits-pilani.ac.in/Pilani/abhijitasati/profile'>Dr. Abhijit R Asati</a>, Assistant Professor, Dept. of Electrical & Electronics Engg, BITS-Pilani"
      }
    ],
    "PUBLICATIONS": [
      {
        "title": "A Design Approach for Compressor Based Approximate Multipliers",
        "pdfSource": "./docs/MultiplierDesign_VLSID15.pdf",
        "author": "<strong>Naman Maheshwari</strong>, Zhixi Yang, Jie Han and Fabrizio Lombardi",
        "popup": "",
        "footer": "Proceedings of 28th International Conference on VLSI Design, 2015 (<strong>VLSID-2015</strong>)" +
                  "<br /><span class='fa fa-trophy'></span>  Awarded the <strong>Student Fellowship</strong> by the VLSID-2015 Conference Committee, for excellent record in academics & past work"
      },
      {
        "title": "Frequency Scaled Segmented (FSS) Scan Architecture for Optimized Scan-Shift Power and Faster Test Application Time",
        "author": "Wilson Pradeep, Prakash Narayanan, Rajesh Mittal, <strong>Naman Maheshwari</strong> and Nikita Naresh",
        "footer": " Accepted in 48th IEEE International Test Conference, 2017 (<strong>ITC-2017</strong>)",
        "tip": "In Press"
      },
      {
        "title": "Enhanced MISR Debug and Diagnosis with Per Cycle Scan Data Observation Capability",
        "author": "<strong>Naman Maheshwari</strong>, Wilson Pradeep, Prakash Narayanan and Rajesh Mittal",
        "footer": "Proceedings of 19th Texas Instruments India Technical Conference, 2016 (<strong>TIITC-2016</strong>) [Acceptance Rate: 24%]",
        "tip": "Paper Not Available for viewing because the data is TI-Confidential."
      },
      {
        "title": "A Comparative Evaluation of Approximate Multipliers",
        "pdfSource": "./docs/MultiplierComparison_NANOARCH16.pdf",
        "author": "Honglan Jiang, Cong Liu, <strong>Naman Maheshwari</strong>, Fabrizio Lombardi and Jie Han",
        "popup": "",
        "footer": "Proceedings of 12th ACM/IEEE International Symposium on Nanoscale Architectures, 2016 (<strong>NANOARCH-2016</strong>)" +
                  "<br /><span class='fa fa-trophy'></span>  Nominated for the <strong>Best Paper Award</strong> in the conference proceedings"
      },
      {
        "title": "Low Cost High-Performance Built-In Self-Test Solution using Cadence LBIST for Safety Critical SoCs",
		"pdfSource": "./docs/LBIST_CDNLive2017.pdf",
        "author": "Wilson Pradeep, Aravinda Acharya and <strong>Naman Maheshwari</strong>",
        "popup": "",
        "footer": " Proceedings of Cadence User Conference, 2017 (<strong>CDNLIVE-2017</strong>)" +
                  "<br /><span class='fa fa-trophy'></span>  Won the <strong>Best Paper Award</strong> in the conference proceedings"
      },
      {
        "title": "A Comparison of Approximate Multipliers for Error Resilient Applications",
        "pdfSource": "./docs/MultiplierComparison_Poster.pdf",
        "author": "<strong>Naman Maheshwari</strong>, Cong Liu, Honglan Jiang and Jie Han",
        "footer": "Poster presented in a Consortium held for the internship students from around the world at the University of Alberta, Edmonton on July 10, 2014"
      }
    ],

    "PATENT": [
      {
        "title": "Novel Method and Apparatus for Per Cycle and Per Pattern MISR Debug and Diagnosis",
        "author": "<strong>Naman Maheshwari</strong>, Wilson Pradeep and Prakash Narayanan",
        "tip": "Filed on Dec 30, 2016.",
        "messageList": [
          "Invented a JTAG-based Hybrid MISR Implementation to solve the problem of debug in case of failing MISR-based scan compression patterns",
          "Various key features of the invention are<ul class='lowspace'>" +
          "<li type='circle'>Enables per pattern and per cycle signature observation without test-time and test-volume impact</li>" +
          "<li type='circle'>Existing Test Data Out (TDO) pin is used for MISR-Observe, avoiding the need for exclusive test-pin</li>" +
          "<li type='circle'>Does not require additional long-chain diagnostic test-mode and enables continue-on-fail in the event of failures</li>" +
          "</ul>"
        ],
        "footer": "<strong>Filed</strong> at USPTO from Texas Instruments"
      }
    ]
  }
};
