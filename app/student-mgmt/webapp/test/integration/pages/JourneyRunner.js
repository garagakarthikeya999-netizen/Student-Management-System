sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/student/studentmgmt/test/integration/pages/StudentsList.gen",
	"com/student/studentmgmt/test/integration/pages/StudentsObjectPage.gen"
], function (JourneyRunner, StudentsListGenerated, StudentsObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/student/studentmgmt') + '/test/flp.html#app-preview',
        pages: {
			onTheStudentsListGenerated: StudentsListGenerated,
			onTheStudentsObjectPageGenerated: StudentsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

