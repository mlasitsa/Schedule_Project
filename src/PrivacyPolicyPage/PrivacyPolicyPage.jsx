import React from 'react';
import '/src/PrivacyPolicyPage/PrivacyPolicyPage.css';
import privacypolicypagelogo from '/privacypolicylogo.png';
import privacypolicypagelogotwo from '/privacypolicypagelogotwo.png';
import polictydata from './privacypolicy.data';

function PrivacyPolicyPage() {
    return (
        <div>
            <h1 className='privacyPolicyPage-title'>PRIVACY POLICY</h1>
            <p className='privacyPolicyPage-description'>We value your privacy and are committed to protecting your personal information. This policy outlines the types of information we collect, how it's used, and safeguarded</p>

            <div className='privacyPolicyPage-answer'>
                {polictydata.map((policy,index) => (
                <div className='privacyPolicyPage-right'>
                    <h4>{policy.policyName}</h4>
                    <p>{policy.policyAnswer}</p>
                </div>

                
                ))}
            </div>
        </div>
    )
}

export default PrivacyPolicyPage;