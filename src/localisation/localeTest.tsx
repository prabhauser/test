import React, { useState } from 'react';
import { withTranslation, Trans } from 'react-i18next';
interface localeTestProps {
    t: any;
    i18n: any;
}
const LocaleTest = (props: localeTestProps) => {
    const [language, setLanguage] = useState('English');
    const { t, i18n } = props;
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLanguage(event?.target.value);
        i18n.changeLanguage(event?.target.value);
    };

    return (
        <div>
            <h1>Please select your Language</h1>
            <input type="radio" name="language" value="tamil" onChange={handleChange} /> <label>Tamil</label>
            <br />
              <input type="radio" name="language" value="en" checked onChange={handleChange} /> <label>English</label>
            <br />
              <input type="radio" name="language" value="filipino" onChange={handleChange} /> <label>Filipino</label>
            <div>
                <h1>
                    <Trans>{t('Introduction')}</Trans>
                </h1>
            </div>
        </div>
    );
};
export default withTranslation()(LocaleTest);
