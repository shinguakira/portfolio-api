{-# LANGUAGE OverloadedStrings #-}

module Data.StrongPoint
  ( strongPointsJA
  , strongPointsEN
  ) where

import Model.StrongPoint (StrongPoint(..))

strongPointsJA :: [StrongPoint]
strongPointsJA =
  [ StrongPoint
      { spSize = "large"
      , spQuestion = "新しい知識の習得、適応の早さ"
      , spAnswer = "新しい知識への習得の早さに自信があります。どの案件でも、未知の言語や技術であっても、知識がある人にも劣らず、プロジェクトを完遂することができました。\nこれらの経験が、習得の早さの証明になります。\n現在の私のスキルに不足を感じられた場合でも、実際は想像以上の早さでスキル不足を埋めることができます。\n基本的に入社までにも時間があるため、使用している環境の情報をいただけましたら、よりスムーズに案件に参画が可能です。\n新しい言語での開発時、各プロジェクトのルール、ベストプラクティスに従うには、1-3か月以上かかりますが、「動くもの」を作るのであれば、1週間ほどで十分な知識を身に着けることができます。\n"
      }
  , StrongPoint
      { spSize = "large"
      , spQuestion = "高い仕様理解能力"
      , spAnswer = "その業界、システムに無知であっても、要件書から、実装を行う上で、確認しておかないといけない項目を見つけることができます。\n特に、東京ガスの案件では、要件が固まってないことが多く、実装を進めつつ、要件を詰める必要がある事柄に関しましては、要件の確認を依頼していました。\n東京ガスの案件では、そのプロジェクトに長年携われた方でも見抜けなかった実際の要件をプロジェクト参画初日で1つ見抜くことができました。\nアクセスが許された範囲で、資料を読み漁り、適切な仕様および実装を決定することができます。\nBtoC向けのWebサイトでは、実際にサイトにアクセスして担当しているシステムの理解を深めます。\n"
      }
  , StrongPoint
      { spSize = "large"
      , spQuestion = "自発能力"
      , spAnswer = "指示された内容のみならず、そのチーム、プロジェクトにおいて足りていないものをなんでも可能な範囲で行います。「時間的余裕があれば」自分のプロジェクトのみならず、他関連するシステムの情報を確認することで、システム全体の知識を深めることができます。\nどの案件でも、要件からタスクの割り出し、各人へのタスクの割り振り、新人への教育資料の作成を行いました。\n"
      }
  , StrongPoint
      { spSize = "large"
      , spQuestion = "自己研鑽能力"
      , spAnswer = "業務時間外でも技術力向上やクライアントへの貢献に取り組むことができる。\nなおかつ、実際に資格取得など、目に見える形で自己研鑽の結果を出すことができる。\n学生時代のスポーツで磨いた競争力、本来の負けず嫌いのため、仕事のどのような部分(テスト作業)でも自身の知識になりそうなものを積極的に探究し、吸収する。\nどの案件でも自己学習力を発揮しており、最初に携わったModbusの通信プログラムの開発では、「何がわからないかわからない」状態からほとんど自己学習のみで開発を行うことができました。\nWebの開発に対してほぼ未経験、Reactも未経験の状態かつ、同チームに有識者がいない状態でも、無事プロジェクトを完遂することができました。"
      }
  , StrongPoint
      { spSize = "small"
      , spQuestion = "会社への貢献とビジネスへの理解"
      , spAnswer = "Freelancers.com にて案件を自分で取得し、翻訳業務を行っている経験があるため、仕事の大まかな全体の流れを理解しています。ただ与えられた仕事をこなすだけでなく、どうやったらクライアントの利益になるかを考え、いただく報酬を超える利益をクライアントに提供できることを目標し業務に取り組みます。\n2社目の会社で、どうやって受託の案件を獲得するかを模索する中で、受託の際には、フェーズごとに契約を行う、SES のビジネス形態と受託のビジネス形態はどう違うかなど、同年代、同経験数では比較的に身についていない知識を持っています。\n"
      }
  , StrongPoint
      { spSize = "medium"
      , spQuestion = "健康管理能力と体力"
      , spAnswer = "学生時代に鍛えた体力で、過酷な環境でも働き続けることができます。ホテルでの週5夜勤8時間労働を1年間行う体力があり、病気にもほとんどならないため、病気で休むことなく、仕事のパフォーマンスも落とすことなく仕事に従事することができます。\n仕事を始めて、現在まで病気等での休みをいただいたことがありません。"
      }
  , StrongPoint
      { spSize = "small"
      , spQuestion = "システム使用者への気遣い"
      , spAnswer = "ホテルにて働いた経験から、どのように気遣いを行いお客様を喜ばせるかを考えるようになったため、お客様目線になって、どういったシステムが使いやすいかを考え開発をすることができます。\n一部システム使用者への気遣いを行いすぎて、逆に一度ダメな実装を行ってしまった経験があります。\n\n(非ITの方は、CSVファイルをexcelで開いてしまうため、excelで開いた際にも、勝手な変換などが行われないように、出力のフォーマットを調整していましたが、データ連携でもCSVを使用するということで、余計なフォーマットを入れてしまいました。)\n"
      }
  , StrongPoint
      { spSize = "small"
      , spQuestion = "効率化を求める性格"
      , spAnswer = "日頃の生活にて、効率を求めて生活をしているため、ただシステムを開発するだけでなく、最適化を求め、拡張性や柔軟性を考え開発を行うことができます。"
      }
  , StrongPoint
      { spSize = "large"
      , spQuestion = "学生時代と家庭教師のアルバイトで培った教育力"
      , spAnswer = "学生時代から人に物事を教えたりする経験があり、家庭教師のアルバイトでは、指導させていただいたお子様を見事志望校へ合格させることができました。\nホテルでの経験も合わせまして、人の気持ちにたった指導を行うことができるため、わかりやすく、指導することができます。\n\nどの職場でも、新人の教育を行ったり、新人教育用の資料作成を行い、教育に貢献出来ました。"
      }
  , StrongPoint
      { spSize = "small"
      , spQuestion = "高い場合分け能力"
      , spAnswer = "想定される事象や条件を網羅的に洗い出し、ロジックの不整合やバグの発生、リスクを未然に防ぐことができます。"
      }
  , StrongPoint
      { spSize = "medium"
      , spQuestion = "アイデア実現能力と問題解決力"
      , spAnswer = "お客さまもしくは自分が提案したアイデアを実装に落とし込むことができます。単にお客さまの要望を満たすだけでなく、根本の問題や本当に実現したいことを確認し、それに応じた代替案を提案します。モックなどを駆使し、アイデアの詳細を詰めて実現を促進します。"
      }
  , StrongPoint
      { spSize = "small"
      , spQuestion = "複雑な問題やバグの対処力"
      , spAnswer = "もぐら叩きのように再発する問題やバグの対処に強みがあります。場合分け能力の高さを活かし、全体の整合性を考慮した上で、難解なコードやスパゲッティコード上での問題解決、最後の詰めの実装を得意としています。"
      }
  ]

strongPointsEN :: [StrongPoint]
strongPointsEN =
  [ StrongPoint
      { spSize = "large"
      , spQuestion = "Quick Learning and Adaptability"
      , spAnswer = "I am confident in my ability to quickly learn new knowledge. In every project, I was able to complete work using unfamiliar languages and technologies, performing as well as those with prior knowledge.\nThese experiences demonstrate my quick learning ability.\nEven if you feel my current skills are lacking, I can fill those gaps faster than you might expect.\nSince there is typically time before starting a new position, if you can provide information about your environment, I can prepare for a smoother transition to your projects.\nWhile it may take 1-3 months to follow project rules and best practices when developing in a new language, I can acquire sufficient knowledge to create \"working solutions\" in about a week.\n"
      }
  , StrongPoint
      { spSize = "large"
      , spQuestion = "Strong Specification Understanding"
      , spAnswer = "Even without prior knowledge of an industry or system, I can identify critical items that need verification from requirement documents before implementation.\nParticularly in Tokyo Gas projects, where requirements were often not finalized, I would request requirement confirmations while proceeding with implementation.\nIn one Tokyo Gas project, I was able to identify an actual requirement on my first day that even long-term project members had not noticed.\nI can determine appropriate specifications and implementations by thoroughly reviewing available documentation within permitted access.\nFor B2C websites, I deepen my understanding of the system by actually accessing the site and exploring its functionality.\n"
      }
  , StrongPoint
      { spSize = "large"
      , spQuestion = "Self-Initiative"
      , spAnswer = "I not only complete assigned tasks but also address any deficiencies in the team or project within my capabilities. When time permits, I deepen my knowledge of the entire system by examining information about related systems beyond my own project.\nIn every project, I identified tasks from requirements, assigned them to team members based on their abilities, and created educational materials for new employees.\n"
      }
  , StrongPoint
      { spSize = "large"
      , spQuestion = "Self-Improvement Ability"
      , spAnswer = "I continuously work on improving my technical skills and contributing to clients.\nMoreover, I can demonstrate tangible results of self-improvement, such as obtaining certifications.\nWith competitive spirit honed through sports during my student years and my inherently competitive nature, I actively explore and absorb anything that could enhance my knowledge in any aspect of work, including testing.\nIn every project, I leverage my self-learning ability. I was able to develop a Modbus communication program almost entirely through self-study, starting from a state where \"I didn't know what I didn't know.\"\nI also successfully completed a web development project with almost no prior experience, no experience with React, and no experts on the team."
      }
  , StrongPoint
      { spSize = "small"
      , spQuestion = "Business Understanding and Company Contribution"
      , spAnswer = "Having acquired projects and performed translation work on Freelancers.com, I understand the general workflow of business. I approach work with the goal of not just completing assigned tasks, but considering how to benefit the client and provide value that exceeds my compensation.\nAt my second company, while exploring how to acquire contract projects, I gained knowledge that is relatively uncommon among peers of my age and experience level, such as understanding phase-by-phase contracting and the differences between SES (System Engineering Service) and contract business models.\n"
      }
  , StrongPoint
      { spSize = "medium"
      , spQuestion = "Health Management and Physical Stamina"
      , spAnswer = "With physical strength developed during my student years, I can continue working even in demanding environments. I have the stamina to work night shifts 5 days a week, 8 hours a day for a year at a hotel. I rarely get sick, allowing me to work without taking sick leave and maintaining consistent performance.\nSince starting my professional career, I have never taken time off due to illness."
      }
  , StrongPoint
      { spSize = "small"
      , spQuestion = "Consideration for System Users"
      , spAnswer = "From my experience working at a hotel, I learned how to be attentive to customers and make them happy. This allows me to develop systems from the user's perspective, considering what would be most user-friendly.\nI once had an experience where I was overly considerate of system users, which ironically led to a poor implementation.\n\n(Non-IT users often open CSV files in Excel, so I adjusted the output format to prevent automatic conversions when opened in Excel. However, this became problematic when the CSV was also used for data integration, as I had added unnecessary formatting.)\n"
      }
  , StrongPoint
      { spSize = "small"
      , spQuestion = "Efficiency-Oriented Personality"
      , spAnswer = "Because I seek efficiency in my daily life, I can develop systems with not just functionality in mind, but also optimization, extensibility, and flexibility."
      }
  , StrongPoint
      { spSize = "large"
      , spQuestion = "Teaching Skills Developed Through Tutoring"
      , spAnswer = "I have experience teaching others since my student days, and as a private tutor, I successfully helped a student gain admission to their desired school.\nCombined with my hotel experience, I can provide instruction that considers others' feelings, making my teaching clear and easy to understand.\n\nIn every workplace, I contributed to education by training new employees and creating educational materials for newcomers."
      }
  , StrongPoint
      { spSize = "small"
      , spQuestion = "Comprehensive Conditional Analysis"
      , spAnswer = "I can exhaustively identify anticipated scenarios and conditions, preventing logical inconsistencies, bugs, and risks before they occur."
      }
  , StrongPoint
      { spSize = "medium"
      , spQuestion = "Idea Realization and Problem-Solving"
      , spAnswer = "I can translate ideas \x{2014} whether proposed by clients or myself \x{2014} into working implementations. Rather than simply fulfilling requests, I identify the underlying problem and what clients truly want to achieve, then propose suitable alternatives. I leverage mockups and other tools to refine idea details and drive realization."
      }
  , StrongPoint
      { spSize = "small"
      , spQuestion = "Handling Complex Problems and Persistent Bugs"
      , spAnswer = "I excel at resolving recurring whack-a-mole problems and bugs. Leveraging my strong conditional analysis skills, I consider overall system consistency to solve problems in complex or spaghetti code and handle the final critical implementation details."
      }
  ]
