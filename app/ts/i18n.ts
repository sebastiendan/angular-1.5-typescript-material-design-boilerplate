/// <reference path="references.d.ts"/>

let english = {
    'invitedToJoinAsCleanerBy': 'You have been invited to join as a cleaner by {{hostName}}',
    'acceptedInvitationBy': 'You have accepted an invitation by {{hostName}}',
    'rejectedInvitationBy': 'You have rejected an invitation by {{hostName}}',
    'checkYourEmailToVerify': 'Check your email {{email}} to verify your account.',
    'number_of_bedrooms': '{{value}} bedrooms',
    'number_of_beds': '{{value}} beds',
    'number_of_bathrooms': '{{value}} bathrooms',
    'number_of_bedroom': '{{value}} bedroom',
    'number_of_bed': '{{value}} bed',
    'number_of_bathroom': '{{value}} bathroom',
};

let japanese = {
    'Host dashboard': 'ホストダッシュボード',
    'Email': 'メールアドレス',
    'Password': 'パスワード',
    'Confirm password': 'パスワードの確認'
};

export =[
    "$translateProvider", ($translateProvider: any) => {
        $translateProvider
            .useSanitizeValueStrategy('sanitizeParameters')
            .translations('en', english)
            .translations('jp', japanese)
            .preferredLanguage('en');
    }
];
