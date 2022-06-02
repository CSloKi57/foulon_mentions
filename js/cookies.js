const bannerCookies = document.getElementById('banner_cookies');
const consentCookies = document.getElementById('banner_button_accept');
const declineCookies = document.getElementById('banner_button_decline');
const prefCookies = document.getElementById('banner_button_pref');
const cookiesPrefBanner = document.getElementById('cookies_preferences');
const validatePref = document.getElementById('validate_pref');
const checkBoxStat = document.getElementById('checkbox_stat');

visibilityCookiesBox();
visibilityCheckBox();

function visibilityCookiesBox() {
    if(localStorage.getItem('consent_cookies')) {
        bannerCookies.classList.add('hidden_consent');
    };
};

consentCookies.addEventListener('click', () => {
    localStorage.setItem('consent_cookies', 'yes');
    visibilityCookiesBox();
});
declineCookies.addEventListener('click', () => {
    localStorage.setItem('consent_cookies', 'no');
    visibilityCookiesBox();
});


prefCookies.addEventListener('click', () => {
    bannerCookies.classList.add('hidden_consent');
    cookiesPrefBanner.classList.replace('hidden_consent', 'visible_consent');
})

validatePref.addEventListener('click', () => {
    if(checkBoxStat.checked == true) {
        localStorage.setItem('consent_cookies', 'yes');
        cookiesPrefBanner.classList.replace('visible_consent', 'hidden_consent');
    }
    if(checkBoxStat.checked == false) {
        localStorage.setItem('consent_cookies', 'no');
        cookiesPrefBanner.classList.replace('visible_consent', 'hidden_consent');
    }
})

function visibilityCheckBox() {
    if(!localStorage.getItem('consent_cookies')) {
        checkBoxStat.checked = false;
    }
    if(localStorage.getItem('consent_cookies') &&  localStorage.getItem('consent_cookies') === 'no') {
        checkBoxStat.checked = false;
    }
    if(localStorage.getItem('consent_cookies') &&  localStorage.getItem('consent_cookies') === 'yes') {
        checkBoxStat.checked = true;
    }
}