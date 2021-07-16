// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ''
  }
  switch(license) {
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]';
    case 'BSD':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]';
    case 'Creative Commons':
      return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]';
    case 'Eclipse':
      return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]';
    case 'GNU':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
    case 'IBM':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]';
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]';
    case 'Open Data Commons':
      return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]';
    case 'Perl':
      return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'; 
    case 'SIL':
      return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)]';
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    case 'WTFPL':
      return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
    case 'Zlib':
      return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]';
    default:
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ''
  }
  switch(license) {
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0)';
    case 'Boost':
      return '(https://www.boost.org/LICENSE_1_0.txt)';
    case 'BSD':
      return '(https://opensource.org/licenses/BSD-3-Clause)';
    case 'Creative Commons':
      return '(http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Eclipse':
      return '(https://opensource.org/licenses/EPL-1.0)';
    case 'GNU':
      return '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'IBM':
      return '(https://opensource.org/licenses/IPL-1.0)';
    case 'ISC':
      return '(https://opensource.org/licenses/ISC)';
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
    case 'Mozilla':
      return '(https://opensource.org/licenses/MPL-2.0)';
    case 'Open Data Commons':
      return '(https://opendatacommons.org/licenses/by/)';
    case 'Perl':
      return '(https://opensource.org/licenses/Artistic-2.0)'; 
    case 'SIL':
      return '(https://opensource.org/licenses/OFL-1.1)';
    case 'Unlicense':
      return 'http://unlicense.org/)';
    case 'WTFPL':
      return '(http://www.wtfpl.net/about/)';
    case 'Zlib':
      return '(https://opensource.org/licenses/Zlib)';
    default:
      return ''
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''
  }
  let badge = renderLicenseBadge(license); //badge
  let link = renderLicenseLink(license); //link
  return badge.concat(link); // returns [!][url to a badge](url to license link)
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  data.title = renderLicenseSection(data);
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
