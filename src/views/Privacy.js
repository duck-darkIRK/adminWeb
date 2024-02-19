import React from 'react';

class Privacy extends React.Component {

    render() {
        const headingStyle = {
            color: '#394285',
            fontSize: '23pt'
        };
        const headingStyle2 = {
            marginLeft: "20px",
            marginRight: "20px"
        };
        const paragraphStyle = {
            fontSize: '12pt'
        };
        const paragraphForm = {
            listStyleType: "decimal",
            fontSize: '12pt'
        };
        const paragraphForm2 = {
            listStyleType: "disc",
            fontSize: '12pt'
        };
        const paragraphForm3 = {
            listStyleType: "circle",
            fontSize: '12pt'
        };
        return (
            <div style={headingStyle2}>
                <h1><strong><span style={headingStyle}>Privacy Policy for Blackcat Chat</span></strong></h1>
                <p><br /></p>
                <ol start="1">
                    <li style={paragraphForm}>
                        <p><span style={paragraphStyle}>Our Advertising Partners</span></p>
                    </li>
                </ol>
                <ul>
                    <li style={paragraphForm2}>
                        <p><span style={paragraphStyle}>Some of advertisers in our app may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</span></p>
                    </li>
                    <li style={paragraphForm2}>
                        <p><span style={paragraphStyle}>Google: https://policies.google.com/technologies/ads</span></p>
                    </li>
                </ul>
                <p><br /></p>
                <ol start="2">
                    <li style={paragraphForm}>
                        <p><span style={paragraphStyle}>Privacy Policies</span></p>
                    </li>
                </ol>
                <ul>
                    <li style={paragraphForm2}>
                        <p><span style={paragraphStyle}>You may consult this list to find the Privacy Policy for each of the advertising partners of Blackcat Chat.</span></p>
                    </li>
                    <li style={paragraphForm2}>
                        <p><span style={paragraphStyle}>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Beacons that are used in their respective advertisements and links that appear on Blackcat Chat. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on this app or other apps or websites.</span></p>
                    </li>
                </ul>
                <p><br /></p>
                <ol start="3">
                    <li style={paragraphForm}>
                        <p><span style={paragraphStyle}>Third Party Privacy Policies</span></p>
                    </li>
                </ol>
                <ul>
                    <li style={paragraphForm2}>
                        <p><span style={paragraphStyle}>Blackcat Chat&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</span></p>
                    </li>
                </ul>
                <p><br /></p>
                <ol start="4">
                    <li style={paragraphForm}>
                        <p><span style={paragraphStyle}>Children&apos;s Information</span></p>
                    </li>
                </ol>
                <ul>
                    <li style={paragraphForm2}>
                        <p><span style={paragraphStyle}>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</span></p>
                    </li>
                </ul>
                <p><br /></p>
                <ol start="5">
                    <li style={paragraphForm}>
                        <p><span style={paragraphStyle}>Online Privacy Policy Only</span></p>
                    </li>
                </ol>
                <ul>
                    <li style={paragraphForm2}>
                        <p><span style={paragraphStyle}>This Privacy Policy applies only to our online activities and is valid for visitors to our App with regards to the information that they shared and/or collect in Blackcat Chat. This policy is not applicable to any information collected offline or via channels other than this app. Our Privacy Policy was created with the help of the App Privacy Policy Generator from App-Privacy-Policy.com</span></p>
                    </li>
                </ul>
                <p><br /></p>
                <ol start="6">
                    <li style={paragraphForm}>
                        <p><span style={paragraphStyle}>Data Security:</span></p>
                    </li>
                </ol>
                <ul>
                    <li style={paragraphForm2}>
                        <p><span style={paragraphStyle}>We do not share any customer information with 3rd parties.</span></p>
                    </li>
                    <li style={paragraphForm2}>
                        <p><span style={paragraphStyle}>All customer information is critical and sensitive and will be stored and processed with utmost security and confidentiality.</span></p>
                    </li>
                    <li style={paragraphForm2}>
                        <p><span style={paragraphStyle}>Encryption methods such as Argon2, SHA512, and cryptographic hashing algorithms will be employed to protect data during database queries.</span></p>
                    </li>
                </ul>
                <p><br /></p>
                <ol start="7">
                    <li style={paragraphForm}>
                        <p><span style={paragraphStyle}>Authentication and Account Integrity:</span></p>
                    </li>
                </ol>
                <ul>
                    <li style={paragraphForm2}>
                        <p><span style={paragraphStyle}>Utilize JSON Web Tokens (JWT) and Passport for user authentication, ensuring integrity and security for account information.</span></p>
                    </li>
                    <li style={paragraphForm2}>
                        <p><span style={paragraphStyle}>Provide robust and reliable authentication mechanisms for users during login and service usage.</span></p>
                    </li>
                </ul>
                <p><br /></p>
                <ol start="8">
                    <li style={paragraphForm}>
                        <p><span style={paragraphStyle}>Network and System Protection:</span></p>
                    </li>
                </ol>
                <ul>
                    <li style={paragraphForm2}>
                        <p><span style={paragraphStyle}>Deploy ConfigServer Security and Firewall to enhance protection against potential threats and unauthorized external attacks.</span></p>
                    </li>
                    <li style={paragraphForm2}>
                        <p><span style={paragraphStyle}>Ensure system stability and continuity, while minimizing the risk of data loss and unwanted interference from third parties.</span></p>
                    </li>
                </ul>
                <p><br /></p>
                <ol start="9">
                    <li style={paragraphForm}>
                        <p><span style={paragraphStyle}>Data Storage and Management:</span></p>
                    </li>
                </ol>
                <ul>
                    <li style={paragraphForm2}>
                        <p><span style={paragraphStyle}>Critical and sensitive customer data will only be stored on highly secure database servers and protected with strong hashing functions.</span></p>
                    </li>
                    <li style={paragraphForm2}>
                        <p><span style={paragraphStyle}>Public information such as images and videos will be stored on Firebase storage with integrated security services from Firebase.</span></p>
                    </li>
                </ul>
                <p><br /></p>
                <ol start="10">
                    <li style={paragraphForm}>
                        <p><span style={paragraphStyle}>Compliance with Legal Regulations:</span></p>
                    </li>
                </ol>
                <ul>
                    <li style={paragraphForm2}>
                        <p><span style={paragraphStyle}>Adhere to all regulations and laws related to data protection and user privacy.</span></p>
                    </li>
                    <li style={paragraphForm2}>
                        <p><span style={paragraphStyle}>Continuously update and implement the latest security measures to ensure compliance with all legal requirements.</span></p>
                    </li>
                </ul>
                <p><br /></p>
            </div>
        )
    }
}

export default Privacy;