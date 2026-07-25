{-# LANGUAGE OverloadedStrings #-}

module Data.Education where

import Model.Education (EducationHistory(..))

educationJA :: [EducationHistory]
educationJA =
  [ EducationHistory
      { eduStartYear = "2018/4"
      , eduEndYear = "2022/4(退学)"
      , eduSchool = "茨城大学"
      , eduDepartment = "工学部情報工学科"
      , eduDescription = "情報工学科は、プログラミングやネットワークなど情報に関わる物事を、情報科学と比べより、実用的に学ぶ学科。JABEE認定を受けている学科であり、卒業とともに技術士の1次試験を免除可能になる。"
      }
  , EducationHistory
      { eduStartYear = "2016/4"
      , eduEndYear = "2018/3"
      , eduSchool = "対馬高校"
      , eduDepartment = "普通科"
      , eduDescription = "地元の高校。普通科のほかには、商業科、国際文化交流科(韓国語)が存在"
      }
  ]

educationEN :: [EducationHistory]
educationEN =
  [ EducationHistory
      { eduStartYear = "2018/4"
      , eduEndYear = "2022/4(退学)"
      , eduSchool = "Ibaraki University"
      , eduDepartment = "Faculty of Engineering, Department of Computer and Information Sciences"
      , eduDescription = "The Department of Computer and Information Sciences focuses on practical applications of programming, networking, and other information technology fields compared to information science. It is JABEE-accredited, which exempts graduates from the first stage of the Professional Engineer examination."
      }
  , EducationHistory
      { eduStartYear = "2016/4"
      , eduEndYear = "2018/3"
      , eduSchool = "Tsushima High School"
      , eduDepartment = "General Studies"
      , eduDescription = "Local high school. In addition to General Studies, it also offers Commercial Studies and International Cultural Exchange (Korean language) departments."
      }
  ]
