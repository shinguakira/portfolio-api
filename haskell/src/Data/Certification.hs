module Data.Certification where

import Data.Text (Text)
import Model.Certification (CertificationItem(..))

creadlyLink :: Text
creadlyLink = "https://www.credly.com/users/akira-shingu/badges"

certificationsJA :: [CertificationItem]
certificationsJA =
  [ CertificationItem
      { certId = 1
      , certName = "\22522\26412\24773\22577\25216\34899\32773\35430\39443"
      , certOrganization = "IPA"
      , certDate = "2023-05"
      , certVerifyLink = "/images/certification/kihonInfoCert.pdf"
      }
  , CertificationItem
      { certId = 2
      , certName = "\12489\12483\12488\12467\12512\12510\12473\12479\12540\12450\12489\12496\12531\12473 \12471\12531\12464\12523\12473\12479\12540"
      , certOrganization = ".com"
      , certDate = "2023-5"
      , certVerifyLink = "/images/certification/comMasterAdvenceOneCert.pdf"
      }
  , CertificationItem
      { certId = 3
      , certName = "\24773\22577\12475\12461\12517\12522\12486\12451\12510\12493\12472\12513\12531\12488"
      , certOrganization = "IPA"
      , certDate = "2023-06"
      , certVerifyLink = "/images/certification/securityManagementCert.pdf"
      }
  , CertificationItem
      { certId = 4
      , certName = "\12487\12451\12472\12479\12523\25216\34899\26908\23450 2\32026 \24773\22577"
      , certOrganization = ""
      , certDate = "2023-07"
      , certVerifyLink = "https://www.sgec.or.jp/kentei/de_kentei/"
      }
  , CertificationItem
      { certId = 5
      , certName = "\32068\12415\36796\12415\12477\12501\12488\12454\12455\12450\25216\34899\32773\12463\12521\124732 \12464\12524\12540\12489B"
      , certOrganization = ""
      , certDate = "2023-07"
      , certVerifyLink = "https://www.jasa.or.jp/etec/"
      }
  , CertificationItem
      { certId = 6
      , certName = "Oracle Certified Java Programmer, Gold SE 11"
      , certOrganization = "Oracle"
      , certDate = "2024-02"
      , certVerifyLink = "/images/certification/javaGoldCert.pdf"
      }
  , CertificationItem
      { certId = 7
      , certName = "Python3 \12456\12531\12472\12491\12450\35469\23450\22522\30990\35430\39443"
      , certOrganization = "Python"
      , certDate = "2023-02"
      , certVerifyLink = "/images/certification/pythonBasicCert.pdf"
      }
  , CertificationItem
      { certId = 8
      , certName = "Python3 \12456\12531\12472\12491\12450\35469\23450\12487\12540\12479\20998\26512\35430\39443"
      , certOrganization = "Python"
      , certDate = "2024-02"
      , certVerifyLink = "/images/certification/pythonDataBaseCert.pdf"
      }
  , CertificationItem
      { certId = 9
      , certName = "Python3 \12456\12531\12472\12491\12450\35469\23450\23455\36341\35430\39443"
      , certOrganization = "Python"
      , certDate = "2024-02"
      , certVerifyLink = "/images/certification/pythonPracticalCert.pdf"
      }
  , CertificationItem
      { certId = 10
      , certName = "AZ-900 Microsoft Azure Fundamentals"
      , certOrganization = "Microsoft"
      , certDate = "2024-03"
      , certVerifyLink = "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/"
      }
  , CertificationItem
      { certId = 11
      , certName = "HTML5\12503\12525\12501\12455\12483\12471\12519\12490\12523\35469\23450\35430\39443\12524\12505\125231"
      , certOrganization = "LPI-Japan"
      , certDate = "2024-03"
      , certVerifyLink = "https://ma.educo-j.or.jp/h/EID900045390/qntzzbkx3h"
      }
  , CertificationItem
      { certId = 12
      , certName = "AWS Certified Solutions Architect \8211 Associate"
      , certOrganization = "AWS"
      , certDate = "2024-03"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 13
      , certName = "HTML5\12503\12525\12501\12455\12483\12471\12519\12490\12523\35469\23450\35430\39443\12524\12505\125232"
      , certOrganization = "LPI-Japan"
      , certDate = "2024-04"
      , certVerifyLink = "https://ma.educo-j.or.jp/h/EID900045390/qntzzbkx3h"
      }
  , CertificationItem
      { certId = 40
      , certName = "AWS Certified SysOps Administrator \8211 Associate"
      , certOrganization = "AWS"
      , certDate = "2024-04"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 14
      , certName = "AWS Certified Developer \8211 Associate"
      , certOrganization = "AWS"
      , certDate = "2024-05"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 15
      , certName = "AWS Certified DevOpes Engineer \8211 Professional"
      , certOrganization = "AWS"
      , certDate = "2024-05"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 16
      , certName = "AWS Certified Machine Learning \8211 Specialty"
      , certOrganization = "AWS"
      , certDate = "2024-06"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 17
      , certName = "AWS Certified Data Enginner - Associate"
      , certOrganization = "AWS"
      , certDate = "2024-06"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 18
      , certName = "AWS Certified Solutions Architect \8211 Professional"
      , certOrganization = "AWS"
      , certDate = "2024-07"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 19
      , certName = "AZ-204 Developing Solutions for Microsoft Azure"
      , certOrganization = "Microsoft"
      , certDate = "2024-07"
      , certVerifyLink = "https://learn.microsoft.com/api/credentials/share/ja-jp/08201797/8238075B8F146208?sharingId=EC8829B80AA18FB2"
      }
  , CertificationItem
      { certId = 20
      , certName = "OSS DB Silver"
      , certOrganization = "LPI-Japan"
      , certDate = "2024-07"
      , certVerifyLink = "https://ma.educo-j.or.jp/d/EID900045390/unpqcjywm8"
      }
  , CertificationItem
      { certId = 21
      , certName = "AWS Certified Advanced Networking \8211 Specialty"
      , certOrganization = "AWS"
      , certDate = "2024-08"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 22
      , certName = "REACT DEVELOPER CERTIED LEVEL 1"
      , certOrganization = "Certificates.dev"
      , certDate = "2024-08"
      , certVerifyLink = "https://interstate21.com/certificate/?code=5H11TDN"
      }
  , CertificationItem
      { certId = 23
      , certName = "Certified Junior Angular Developer"
      , certOrganization = "Certificates.dev Angular Traning"
      , certDate = "2024-09"
      , certVerifyLink = "https://certificates.dev/c/9cea8a10-14d5-44e4-9343-70c02f44c9b7"
      }
  , CertificationItem
      { certId = 24
      , certName = "Certified Typescript Developer Professional"
      , certOrganization = "w3schools"
      , certDate = "2024-09"
      , certVerifyLink = "https://verify.w3schools.com/1P5VV1GZ0S"
      }
  , CertificationItem
      { certId = 25
      , certName = "AZ-104 Microsoft Azure Administrator"
      , certOrganization = "Microsoft"
      , certDate = "2024-10"
      , certVerifyLink = "https://learn.microsoft.com/api/credentials/share/ja-jp/08201797/5656C6EBDF249EA9?sharingId=EC8829B80AA18FB2"
      }
  , CertificationItem
      { certId = 26
      , certName = "AWS Certified AI Practitioner"
      , certOrganization = "AWS"
      , certDate = "2024-10"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 27
      , certName = "AWS Certified Machine Learning - Associate"
      , certOrganization = "AWS"
      , certDate = "2024-11"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 28
      , certName = "Certified Sass Developer Professional"
      , certOrganization = "w3schools"
      , certDate = "2024-11"
      , certVerifyLink = "https://verify.w3schools.com/1PD7RE2K1Y"
      }
  , CertificationItem
      { certId = 29
      , certName = "Certified Node.js Developer Professional"
      , certOrganization = "w3schools"
      , certDate = "2024-11"
      , certVerifyLink = "https://verify.w3schools.com/1PES45GB6N"
      }
  , CertificationItem
      { certId = 30
      , certName = "Professional Cloud Architect Certification"
      , certOrganization = "Google Cloud"
      , certDate = "2024-12"
      , certVerifyLink = "https://www.credly.com/badges/c84a1a87-76b7-4df6-bba5-7c76dc336dc4/public_url"
      }
  , CertificationItem
      { certId = 31
      , certName = "Certified Junior JavaScript Developer"
      , certOrganization = "Certificates.dev"
      , certDate = "2025-02"
      , certVerifyLink = "https://certificates.dev/c/9e27f955-22c7-4412-89ce-c90c2c47ebd7"
      }
  , CertificationItem
      { certId = 32
      , certName = "Meta Front-End Developer Certificate"
      , certOrganization = "Meta"
      , certDate = "2025-02"
      , certVerifyLink = "https://www.credly.com/badges/d93bc926-790d-467b-90c4-06797bcd3084"
      }
  , CertificationItem
      { certId = 33
      , certName = "Principles of UX/UI Design"
      , certOrganization = "Meta"
      , certDate = "2025-02"
      , certVerifyLink = "https://coursera.org/share/f11392407270a0c8e14f8f7f57c4fe8d"
      }
  , CertificationItem
      { certId = 34
      , certName = "Advanced React"
      , certOrganization = "Meta"
      , certDate = "2025-02"
      , certVerifyLink = "https://coursera.org/share/37486ef3a07ab9a0d83115e92f620164"
      }
  ]

certificationsEN :: [CertificationItem]
certificationsEN =
  [ CertificationItem
      { certId = 1
      , certName = "Fundamental Information Technology Engineer Examination"
      , certOrganization = "IPA"
      , certDate = "2023-05"
      , certVerifyLink = "/images/certification/kihonInfoCert.pdf"
      }
  , CertificationItem
      { certId = 2
      , certName = "Dot Com Master Advance Single Star"
      , certOrganization = ".com"
      , certDate = "2023-5"
      , certVerifyLink = "/images/certification/comMasterAdvenceOneCert.pdf"
      }
  , CertificationItem
      { certId = 3
      , certName = "Information Security Management"
      , certOrganization = "IPA"
      , certDate = "2023-06"
      , certVerifyLink = "/images/certification/securityManagementCert.pdf"
      }
  , CertificationItem
      { certId = 4
      , certName = "Digital Technology Test Level 2 Information"
      , certOrganization = ""
      , certDate = "2023-07"
      , certVerifyLink = "https://www.sgec.or.jp/kentei/de_kentei/"
      }
  , CertificationItem
      { certId = 5
      , certName = "Embedded Software Engineer Class 2 Grade B"
      , certOrganization = ""
      , certDate = "2023-07"
      , certVerifyLink = "https://www.jasa.or.jp/etec/"
      }
  , CertificationItem
      { certId = 6
      , certName = "Oracle Certified Java Programmer, Gold SE 11"
      , certOrganization = "Oracle"
      , certDate = "2024-02"
      , certVerifyLink = "/images/certification/javaGoldCert.pdf"
      }
  , CertificationItem
      { certId = 7
      , certName = "Python3 Engineer Certification Basic Exam"
      , certOrganization = "Python"
      , certDate = "2023-02"
      , certVerifyLink = "/images/certification/pythonBasicCert.pdf"
      }
  , CertificationItem
      { certId = 8
      , certName = "Python3 Engineer Certification Data Analysis Exam"
      , certOrganization = "Python"
      , certDate = "2024-02"
      , certVerifyLink = "/images/certification/pythonDataBaseCert.pdf"
      }
  , CertificationItem
      { certId = 9
      , certName = "Python3 Engineer Certification Practical Exam"
      , certOrganization = "Python"
      , certDate = "2024-02"
      , certVerifyLink = "/images/certification/pythonPracticalCert.pdf"
      }
  , CertificationItem
      { certId = 10
      , certName = "AZ-900 Microsoft Azure Fundamentals"
      , certOrganization = "Microsoft"
      , certDate = "2024-03"
      , certVerifyLink = "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/"
      }
  , CertificationItem
      { certId = 11
      , certName = "HTML5 Professional Certification Level 1"
      , certOrganization = "LPI-Japan"
      , certDate = "2024-03"
      , certVerifyLink = "https://ma.educo-j.or.jp/h/EID900045390/qntzzbkx3h"
      }
  , CertificationItem
      { certId = 12
      , certName = "AWS Certified Solutions Architect \8211 Associate"
      , certOrganization = "AWS"
      , certDate = "2024-03"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 13
      , certName = "HTML5 Professional Certification Level 2"
      , certOrganization = "LPI-Japan"
      , certDate = "2024-04"
      , certVerifyLink = "https://ma.educo-j.or.jp/h/EID900045390/qntzzbkx3h"
      }
  , CertificationItem
      { certId = 40
      , certName = "AWS Certified SysOps Administrator \8211 Associate"
      , certOrganization = "AWS"
      , certDate = "2024-04"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 14
      , certName = "AWS Certified Developer \8211 Associate"
      , certOrganization = "AWS"
      , certDate = "2024-05"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 15
      , certName = "AWS Certified DevOpes Engineer \8211 Professional"
      , certOrganization = "AWS"
      , certDate = "2024-05"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 16
      , certName = "AWS Certified Machine Learning \8211 Specialty"
      , certOrganization = "AWS"
      , certDate = "2024-06"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 17
      , certName = "AWS Certified Data Enginner - Associate"
      , certOrganization = "AWS"
      , certDate = "2024-06"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 18
      , certName = "AWS Certified Solutions Architect \8211 Professional"
      , certOrganization = "AWS"
      , certDate = "2024-07"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 19
      , certName = "AZ-204 Developing Solutions for Microsoft Azure"
      , certOrganization = "Microsoft"
      , certDate = "2024-07"
      , certVerifyLink = "https://learn.microsoft.com/api/credentials/share/ja-jp/08201797/8238075B8F146208?sharingId=EC8829B80AA18FB2"
      }
  , CertificationItem
      { certId = 20
      , certName = "OSS DB Silver"
      , certOrganization = "LPI-Japan"
      , certDate = "2024-07"
      , certVerifyLink = "https://ma.educo-j.or.jp/d/EID900045390/unpqcjywm8"
      }
  , CertificationItem
      { certId = 21
      , certName = "AWS Certified Advanced Networking \8211 Specialty"
      , certOrganization = "AWS"
      , certDate = "2024-08"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 22
      , certName = "REACT DEVELOPER CERTIED LEVEL 1"
      , certOrganization = "Certificates.dev"
      , certDate = "2024-08"
      , certVerifyLink = "https://interstate21.com/certificate/?code=5H11TDN"
      }
  , CertificationItem
      { certId = 23
      , certName = "Certified Junior Angular Developer"
      , certOrganization = "Certificates.dev Angular Traning"
      , certDate = "2024-09"
      , certVerifyLink = "https://certificates.dev/c/9cea8a10-14d5-44e4-9343-70c02f44c9b7"
      }
  , CertificationItem
      { certId = 24
      , certName = "Certified Typescript Developer Professional"
      , certOrganization = "w3schools"
      , certDate = "2024-09"
      , certVerifyLink = "https://verify.w3schools.com/1P5VV1GZ0S"
      }
  , CertificationItem
      { certId = 25
      , certName = "AZ-104 Microsoft Azure Administrator"
      , certOrganization = "Microsoft"
      , certDate = "2024-10"
      , certVerifyLink = "https://learn.microsoft.com/api/credentials/share/ja-jp/08201797/5656C6EBDF249EA9?sharingId=EC8829B80AA18FB2"
      }
  , CertificationItem
      { certId = 26
      , certName = "AWS Certified AI Practitioner"
      , certOrganization = "AWS"
      , certDate = "2024-10"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 27
      , certName = "AWS Certified Machine Learning - Associate"
      , certOrganization = "AWS"
      , certDate = "2024-11"
      , certVerifyLink = creadlyLink
      }
  , CertificationItem
      { certId = 28
      , certName = "Certified Sass Developer Professional"
      , certOrganization = "w3schools"
      , certDate = "2024-11"
      , certVerifyLink = "https://verify.w3schools.com/1PD7RE2K1Y"
      }
  , CertificationItem
      { certId = 29
      , certName = "Certified Node.js Developer Professional"
      , certOrganization = "w3schools"
      , certDate = "2024-11"
      , certVerifyLink = "https://verify.w3schools.com/1PES45GB6N"
      }
  , CertificationItem
      { certId = 30
      , certName = "Professional Cloud Architect Certification"
      , certOrganization = "Google Cloud"
      , certDate = "2024-12"
      , certVerifyLink = "https://www.credly.com/badges/c84a1a87-76b7-4df6-bba5-7c76dc336dc4/public_url"
      }
  , CertificationItem
      { certId = 31
      , certName = "Certified Junior JavaScript Developer"
      , certOrganization = "Certificates.dev"
      , certDate = "2025-02"
      , certVerifyLink = "https://certificates.dev/c/9e27f955-22c7-4412-89ce-c90c2c47ebd7"
      }
  , CertificationItem
      { certId = 32
      , certName = "Meta Front-End Developer Certificate"
      , certOrganization = "Meta"
      , certDate = "2025-02"
      , certVerifyLink = "https://www.credly.com/badges/d93bc926-790d-467b-90c4-06797bcd3084"
      }
  , CertificationItem
      { certId = 33
      , certName = "Principles of UX/UI Design"
      , certOrganization = "Meta"
      , certDate = "2025-02"
      , certVerifyLink = "https://coursera.org/share/f11392407270a0c8e14f8f7f57c4fe8d"
      }
  , CertificationItem
      { certId = 34
      , certName = "Advanced React"
      , certOrganization = "Meta"
      , certDate = "2025-02"
      , certVerifyLink = "https://coursera.org/share/37486ef3a07ab9a0d83115e92f620164"
      }
  ]
