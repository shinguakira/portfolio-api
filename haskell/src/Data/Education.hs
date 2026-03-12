module Data.Education where

import Model.Education (EducationHistory(..))

educationJA :: [EducationHistory]
educationJA =
  [ EducationHistory
      { eduStartYear = "2018/4"
      , eduEndYear = "2022/4(\36864\23398)"
      , eduSchool = "\33576\22478\22823\23398"
      , eduDepartment = "\24037\23398\37096\24773\22577\24037\23398\31185"
      , eduDescription = "\24773\22577\24037\23398\31185\12399\12289\12503\12525\12464\12521\12511\12531\12464\12420\12493\12483\12488\12527\12540\12463\12394\12393\24773\22577\12395\38306\12431\12427\29289\20107\12434\12289\24773\22577\31185\23398\12392\27604\12409\12424\12426\12289\23455\29992\30340\12395\23398\12406\23398\31185\12290JABEE\35469\23450\12434\21463\12369\12390\12356\12427\23398\31185\12391\12354\12426\12289\21330\26989\12392\12392\12418\12395\25216\34899\22763\12398\65297\27425\35430\39443\12434\20813\38500\21487\33021\12395\12394\12427\12290"
      }
  , EducationHistory
      { eduStartYear = "2016/4"
      , eduEndYear = "2018/3"
      , eduSchool = "\23550\39340\39640\26657"
      , eduDepartment = "\26222\36890\31185"
      , eduDescription = "\22320\20803\12398\39640\26657\12290\26222\36890\31185\12398\12411\12363\12395\12399\12289\21830\26989\31185\12289\22269\38555\25991\21270\20132\27969\31185(\38867\22269\35486)\12364\23384\22312"
      }
  ]

educationEN :: [EducationHistory]
educationEN =
  [ EducationHistory
      { eduStartYear = "2018/4"
      , eduEndYear = "2022/4(\36864\23398)"
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
