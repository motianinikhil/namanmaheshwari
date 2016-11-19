/*
 window.workMap = {
 "texasFull": {
 "title": "Texas Instruments (Jul '15 - Present)",
 "message": "<strong>DFT Engineer</strong>" +
 "<p>I am currently working as a Digital Design Engineer in the Automotive Radar Design-for-Testability team at Texas Instruments, Bangalore, India.</p>" +
 "<p>  After joining the team full-time, I have worked on the implementation of Built-In Self-Test (BIST) mechanism for memories for the memory-intensive design with 250+memories. To cater to stringent automotive-safety standards, I architected memory-BIST for both production and field testing. To optimize test-time, I implemented concurrent testing of memories, saving approximately 50% on memory test-time. I also optimized memory data-path based on physical design feedback, and verified multiple fault-detection algorithms across all process corners to qualify the BIST-architecture. To further enhance the diagnostics in MISR-based scan-compression, we invented a novel JTAG-based Hybrid MISR architecture. It includes additional hardware to enable features such as continue-on-fail and on-the-fly failure detection for test-time optimization, which are not supported in the existing architectures. Also, it avoids the need of exclusive MISR-Observe test-pin and mitigates the need of additional long-chain diagnostic mode. This has been approved to be filed at USPTO and Provisional Specification has been filed. We consolidated our work on MISR-based scan-compression diagnostics and submitted it as a full-paper in VTS-2017. Currently, I am involved in ATPG for advanced fault-models like Small Delay Defect (SDD) and Path-Delay, working on improving the test-quality and optimizing the final production set pattern-count.</p>"
 },
 "texasIntern": {
 "title": "",
 "message": "<p>In my second semester in the senior year at BITS-Pilani, I interned at Texas Instruments, Bangalore, India in the Automotive Radar Design-for-Testability team.</p>" +
 "<p>As part of the internship, I worked on designing a Context Save and Restore Mechanism to preserve the values of critical functional registers during field testing by the Self-Test Controller. I designed a robust state machine which saves their values in a RAM during test and restores them after test-completion, overcoming the challenge of asynchronous functioning of RAMs. Alongside this, I worked on the Automatic Test Pattern Generation (ATPG) for critical IPs under the scope of self-test for automotive safety. I implemented a novel technique of Low-Power Scan (LP-Scan) invented by my team, which led to 43% reduction in scan-shift power. The LP-Scan architecture required modification of the ATPG tool-generated patterns and the major challenge was to calculate its fault-free Multiple Input Signature Register (MISR) signature. I created an automated infrastructure to generate fault-free MISR signatures for custom patterns and further developed it to support the generation of ROM-Images containing patterns and MISR signatures for self-test critical IPs. To address the debug and diagnosis limitations of the MISR-based scan-compression patterns, the flow was enhanced to support the per-cycle and per-pattern MISR signature generation. This flow resulted in debug-time savings of millions of cycles. </p><p>This internship provided me with invaluable practical experience in cutting-edge technology, where I was able to solve a potential high-impact problem, saving significant test-cost for TI.</p><p> I presented this work in TIITC-2016</p>"
 },
 "mitacsIntern": {
 "title": "Visiting Research Scholar, University of Alberta, Edmonton, Canada(May '14 to Jul '14)",
 "message": "Visiting Research Scholar, Department of Electrical and Computer Engineering, University of Alberta, Edmonton, Canada"
 }
 };
 */
(function (a) {
  a.createModal = function (b) {
    defaults = {title: "", message: "Additional Information!", closeButton: true, scrollable: false};
    var b = a.extend({}, defaults, b);
    var c = (b.scrollable === true) ? 'style="max-height: 420px;overflow-y: auto;"' : "";
    html = '<div class="modal fade" id="myModal">';
    html += '<div class="modal-dialog">';
    html += '<div class="modal-content">';
    html += '<div class="modal-header">';
    html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
    if (b.title.length > 0) {
      html += '<h4 class="modal-title">' + b.title + "</h4>"
    }
    html += "</div>";
    html += '<div class="modal-body text-justify" ' + c + ">";
    html += b.message;
    html += "</div>";
    html += '<div class="modal-footer">';
    if (b.closeButton === true) {
      html += '<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'
    }
    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
    a("body").prepend(html);
    a("#myModal").modal().on("hidden.bs.modal", function () {
      a(this).remove()
    })
  }
})(jQuery);
$(function () {
  $('.view-exp').on('click', function () {
    var ref = $(this).attr('data-ref') || "texasFull";
    if (window.workMap && window.workMap.hasOwnProperty(ref)) {
      var data = workMap[ref];
      var title = data.title || "Additional Info...";
      var message = '<div width="100%" height="500">' + (data.message || "...") + '</div>';
      $.createModal({
        title: title,
        message: message,
        closeButton: true
      });
    }
    return false;
  });
});