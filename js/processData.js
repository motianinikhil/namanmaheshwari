function portfolio (obj, container) {
  var head = '<div id="horizontalTab" style="display: block; width: 100%; margin: 0px;"><ul class="resp-tabs-list wow fadeInUp animated" data-wow-delay=".7s">';
  var body = '<div class="resp-tabs-container">';

  function readPubs (currentTab, tab) {
    var isProject = (tab === "PROJECTS");
    var content = '<ol class = "tab_img ">';
    var firstDone = false;
    for (var e = 0; e < currentTab.length; e++) {
      var str = '<li><blockquote ';
      var element = currentTab[e];
      str += ' data-toggle="collapse" data-target="#' + tab + e + '" >';
      if (isProject) {
        str += element.title + '<div class="pull-right-lg">' + element.duration;
        if (element.report) {
          str += ' <br /><div class="pull-right-lg"><a class="view-pdf" href="' + element.report + '" data-title="' +
                 element.title +
                 ' - Report">Project Report</a></div>';
        }
        str += '</div>';
        element.footer = element.footer || "";
        str += '<footer>' + element.footer + '<div id="' + tab + e + '" class="collapse in';
        if (!firstDone) {
          firstDone = true;
        }
        str += '">' + '<ul><li  type="square">' +
               element.message.join('</li><li type="square">') + '</li></ul>' +
               '</div>' + '</footer>';
        str += "</a></blockquote>";
      } else {
        str += element.author + ', <em><a ';
        if (element.pdfSource) {
          str += 'class="view-pdf" data-title="' + element.title + '" href="' + element.pdfSource + '" ';
        } else {
          element.popup = element.popup || "";
          var ptitle = element.popup.title || element.popup || element.tip || "Not Available for Viewing..." + "";
          var pContent = element.popup.content || element.popup || element.tip || "Not Available for Viewing..." + "";
          str += 'data-toggle="tooltip" data-content="' + pContent + '" title="' + ptitle + '"  data-placement="bottom"'
        }
        str += ' >' + element.title + '</a></em>';
        if (element.footer) {
          str += '<footer>' + element.footer;
        }
        if (element.messageList) {
          str +=
            '<div id="' + tab + e + '" class="collapse in"><ul><li  type="square">' + element.messageList.join('</li><li type="square">') +
            '</li></ul>' +
            '</div>'
        }
        if (element.footer) {
          str += "</footer>";
        }
        str += "</blockquote>";
      }
      str += "</li>";
      content += str;
    }
    content += '</ol>';
    return content;
  }

  for (var tab in obj) {
    if (obj.hasOwnProperty(tab)) {
      head += '<li class="resp-tab-item"><span>' + tab + '</span></li>';
      body += '<div class="tab-1 resp-tab-content"><div class="tab_img">';
      body += readPubs(obj[tab], tab);
      body += '</div></div>';
    }
  }
  head += '</ul><div class="clearfix"></div>';
  body += '</div>';

  var portFolioContent = head + body + '</div>';

  $(container).html(portFolioContent);

}
portfolio(DATA.PORTFOLIO, '#portfolio-container');
$.ready($('[data-toggle="popover"]').popover());
$.ready($('[data-toggle="tooltip"]').tooltip());

function leftRight (obj, container, icon) {

  if (!icon) {
    icon = "glyphicon-briefcase";
  }
  var leftRightContent = "";
  var firstDone = false;

  var toggle1 = "work-left";
  var toggle2 = "work-right";
  var alternate = true;
  for (var w in obj) {
    var element = obj[w];
    var content = '<div class="work-info">';
    content += '<div class="col-md-6 ';
    content += toggle1 + '">' +
               '<h4>' + element.duration + '</h4>' +
               '</div>' +
               '<div class="col-md-6 ' + toggle2 + '"><h5>';
    if (alternate) {
      content += '<span class="glyphicon ' + icon + '"></span>';
    }
    content += element.shortTitle;
    if (!alternate) {
      content += '<span class="glyphicon ' + icon + '"></span>';
    }
    content += '</h5>';
    for (d in element.shortDesc) {
      var shortDesc = element.shortDesc[d];
      content += '<p>' + shortDesc + '</p>';
    }
    if (element.additionalInfo) {
      content +=
        '<a class=" view-exp" data-ref="' + element.additionalInfo.dataRef + '">' + element.additionalInfo.linkText + '</a>';
      if (!element.additionalInfo.data.message) {
        element.additionalInfo.data.message =
          "<strong>" + element.additionalInfo.data.messageHead +
          "</strong><br /><br /><ul class='lowspace'><li type='square'>" +
          element.additionalInfo.data.messageList.join("</li><li type='square'>") + "</li></ul>";
      }
      window.workMap = window.workMap || {};
      window.workMap[element.additionalInfo.dataRef] = element.additionalInfo.data;
    }
    content += '</div><div class="clearfix"></div></div>';

    leftRightContent += content;
    var temp = toggle1;
    toggle1 = toggle2;
    toggle2 = temp;
    if (!firstDone) {
      toggle1 = toggle1 + " " + toggle1 + "2";
      toggle2 = toggle2 + " " + toggle2 + "2";
      firstDone = true;
    }
    alternate = !alternate;

  }
  if (container) {
    $(container).append(leftRightContent);
  } else {
    return leftRightContent;
  }
}
leftRight(DATA.WORK, "#work-container", "glyphicon-briefcase");
leftRight(DATA.EDUCATION, "#education-container", "glyphicon-education");
$(document).ready(function () {
  $('#submitContact').click(function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: "http://formspree.io/naman.mah1993@gmail.com",
      data: $('#contactForm').serialize(),
      success: function () {
        var successMsg = '<div id="alert-msg"  class="alert alert-success alert-dismissible fade in">' +
                         '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                         'Message Sent Successfully' +
                         '</div>';
        $("#alert-msg").fadeTo(2000, 500).slideUp(500, function () {
          $("#alert-msg").slideUp(500);
        });

        $('#alert').append(successMsg);
      },
      error: function () {
        var failMsg = '<div id="alert-msg" class="alert alert-error alert-dismissible fade in">' +
                      '<a href="#" class="close" data-dismiss="alert">&times;</a>' +
                      '<strong> Error </strong>There was an error sending message. Please contact directly' +
                      '</div>';
        $('#alert').append(failMsg);
      }
    })
  })
});
$(".alert-dismissable").fadeTo(2000, 500).slideUp(500, function () {
  $(".alert-dismissable").alert('close');
});
