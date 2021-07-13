import './LanguageToggle.css'
import { useState } from 'react'
const LanguageToggle = () => {
    const [language, setLanguage] = useState(true)
    if (language === true) {
        console.log("English language");
    }
    else {
        console.log("Croatian language");
    }

    return (
        <div className="onoffswitch">
            <input language={language} onClick={() => setLanguage(!language)} type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" tabIndex={0} defaultChecked />
            <label className="onoffswitch-label" htmlFor="myonoffswitch">
                <span className="onoffswitch-inner" />
                <span className="onoffswitch-switch" />
            </label>
        </div>

    )
}
export default LanguageToggle