{-# LANGUAGE OverloadedStrings #-}

module Data.Project where

import Model.Project (Project(..))

projectsJA :: [Project]
projectsJA =
  [ Project
      { projTitle = "\38283\30330\20104\23450\12434\32771\12360\12390\12356\12427\12450\12503\12522"
      , projDescription = "[\25505\29992\12469\12452\12488\38291\12398\12503\12525\12501\12451\12540\12523\33258\21205\20837\21147(\12487\12540\12479\36899\25658)]\n[\30011\20687\35469\35672\12434\20351\29992\12375\12383\20309\12363]\n[Visual Studio\12398\12503\12525\12472\12455\12463\12488\12501\12449\12452\12523\22793\25563\12450\12503\12522]\n[\20309\12363\12398\12510\12483\12481\12531\12464\12450\12503\12522]\n[\20309\12363\12398\12469\12452\12488\12398advanced\26908\32034]\n[\12458\12531\12521\12452\12531\20250\35696\12450\12503\12522]\n[\12479\12452\12500\12531\12464\215\12497\12527\12495\125213D\12508\12483\12488]\n[\12479\12452\12500\12531\12464\215Google Map]\n[\12479\12452\12500\12531\12464\2152D\12466\12540\12512]  \n"
      , projImage = "/images/projects/onDeveloping.jpg"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn/ui", "Vercel"]
      , projGithubUrl = ""
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "Brighty \12467\12540\12481\12531\12464\12510\12483\12481\12531\12464\12450\12503\12522"
      , projDescription = "Brighty \12467\12540\12481\12531\12464\12510\12483\12481\12531\12464\12450\12503\12522\n\32076\27508\12395\35352\36617\12398\20803\12392\21516\27096\12398\12383\12417\12289\30465\30053\n"
      , projImage = "/images/projects/3dConnectFour.png"
      , projTechnologies = ["Next.js", "React", "TypeScript", "Tailwind CSS", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/electronSample"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "VSCode\39080\12509\12540\12488\12501\12457\12522\12458\12469\12452\12488"
      , projDescription = "Visual Studio Code\12398\12456\12487\12451\12479\30011\38754\12434\20877\29694\12375\12383\12509\12540\12488\12501\12457\12522\12458\12469\12452\12488\n\12479\12452\12488\12523\12496\12540\12289\12450\12463\12486\12451\12499\12486\12451\12496\12540\12289\12469\12452\12489\12496\12540\12289\12479\12502\12289\12479\12540\12511\12490\12523\12289\12473\12486\12540\12479\12473\12496\12540\12434\24544\23455\12395\20877\29694\12290\n\12503\12525\12501\12451\12540\12523\12289\12503\12525\12472\12455\12463\12488\12289\12473\12461\12523\31561\12398\65304\12475\12463\12471\12519\12531\12434IDE\12398\12501\12449\12452\12523\12398\12424\12358\12395\38322\35239\21487\33021\12290\n\65299\31278\39006\12398\12499\12472\12517\12450\12523\12486\12540\12510\12289\26085\33521\12496\12452\12522\12531\12460\12523\23550\24540\12289Playwright\12395\12424\12427\65297\65304\65300\20214\12398\12473\12490\12483\12503\12471\12519\12483\12488\12486\12473\12488\25645\36617\12290"
      , projImage = "/images/projects/vscode-portfolio.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "next-intl", "Playwright", "lucide-react", "Vercel"]
      , projGithubUrl = "https://github.com/shinguakira/vscode-portfolio"
      , projLiveUrl = "https://v0-project-steel-nine.vercel.app/"
      }
  , Project
      { projTitle = "VSCode\39080\12509\12540\12488\12501\12457\12522\12458\12469\12452\12488\65288\20491\20154\29256\65289"
      , projDescription = "VSCode\39080\12509\12540\12488\12501\12457\12522\12458\12398\20491\20154\12459\12473\12479\12510\12452\12474\29256\nNext.js 16 + React 19 + Tailwind CSS v4\12408\12398\12450\12483\12503\12464\12524\12540\12489\29256\12290\n\12475\12463\12471\12519\12531\12372\12392\12395\65299\31278\39006\12398\12499\12472\12517\12450\12523\12486\12540\12510\65288Modern, Innovative, Professional\65289\12434\25645\36617\12290\n\25313\24373\27231\33021\12462\12515\12521\12522\12540\12289\35373\23450\12497\12493\12523\12289\12481\12517\12540\12488\12522\12450\12523\12458\12540\12496\12540\12524\12452\12289Git\23653\27508\12497\12493\12523\31561\12398\36861\21152\27231\33021\12354\12426\12290"
      , projImage = "/images/projects/vscode-portfolio.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "next-intl", "Playwright", "lucide-react", "Vercel"]
      , projGithubUrl = "https://github.com/shinguakira/my-vscode-portfolio"
      , projLiveUrl = "https://v0-project-steel-nine.vercel.app/"
      }
  , Project
      { projTitle = "Electron Vite React\12450\12503\12522"
      , projDescription = "Electron Vite React\12450\12503\12522\nPython\12289exe\12394\12393\12434\23455\34892\12290Electron\12398\19968\36890\12426\12398\27231\33021\12434\25645\36617\12375\12383\12450\12503\12522\12290\n\12452\12531\12473\12488\12540\12523\29992\12398exe\12501\12449\12452\12523\20316\25104\20104\23450\12290\n"
      , projImage = "/images/projects/3dConnectFour.png"
      , projTechnologies = ["Electron", "Vite", "React", "TypeScript", "Tailwind CSS", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/electronSample"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "3D4\30446\20006\12409"
      , projDescription = "3D4\30446\20006\12409\n\12523\12540\12512\12510\12483\12481\12531\12464\12414\12391\23455\35013\12290\23455\38555\12398\23550\25126\12399\23455\35013\20104\23450\12290\nAI\12392\12398\23550\25126\12289\21516\30011\38754\12391\12398\65298\20154\23550\25126\12289\12523\12540\12512\12510\12483\12481\12531\12464(\20104\23450)\12364\21487\33021\12290\n\12479\12452\12488\12523\30011\38754\12364\12521\12531\12480\12512\12395\22793\12431\12427\12290\20351\29992\12377\12427\12458\12502\12472\12455\12463\12488\12418\36984\25246\21487\33021\12290\n"
      , projImage = "/images/projects/3dConnectFour.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/3d-connect-four"
      , projLiveUrl = "https://3d-connect-four-vfpy.vercel.app/"
      }
  , Project
      { projTitle = "2D\12466\12540\12512"
      , projDescription = "KaPlay\12521\12452\12502\12521\12522\12434\20351\29992\12375\12383\65298D\12466\12540\12512\nChatGPT\12364\32771\12360\12383\12473\12488\12540\12522\12540\12434\20803\12395\12466\12540\12512\12508\12540\12452\39080\12398\12464\12521\12501\12451\12483\12463\12391\12398\23455\35013\20013\12290\n\12354\12360\12390\12466\12540\12512\38283\30330\12391\12289React\12362\12424\12403React\38306\36899\12398\12521\12452\12502\12521\12522\12434\20351\29992\12377\12427\12371\12392\12391\12289\n\26222\27573\12398\38283\30330\12391\12399\27671\12389\12363\12394\12356\21508\12521\12452\12502\12521\12522\12434\20351\29992\26178\12398\29305\24500\12420\12289\26368\36969\21270\12395\12388\12356\12390\23398\32722\12377\12427\12290\n"
      , projImage = "/images/projects/2d-rpg-react.png"
      , projTechnologies = ["React", "TypeScript", "Remix", "Hono.js", "DB(\26410\23450)", "Tailwind CSS", "lucide-react", "kaPlay"]
      , projGithubUrl = "https://github.com/shinguakira/2d-rpg-react"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "\31070\23470\31456\24773\22577\21462\24471API"
      , projDescription = "\31070\23470\31456\24773\22577\21462\24471API\n\12509\12540\12488\12501\12457\12522\12458\12434\21029\12497\12479\12540\12531\20316\25104\12420\12289\23653\27508\26360\20316\25104\20966\29702\12398\12383\12417\12395\12289\12513\12531\12486\12490\12531\12473\26178\38291\21066\28187\12398\12383\12417\12289\20849\36890\12395\20351\29992\12391\12365\12427API\n\12487\12540\12479\12399DB\12394\12375\12391json\12391\23450\32681\12290\n"
      , projImage = "/images/projects/portfolio-api.png"
      , projTechnologies = ["TypeScript", "Express.js", "AWS Lambda"]
      , projGithubUrl = "https://github.com/shinguakira/portfolio-api"
      , projLiveUrl = "https://portfolio-api-ten-delta.vercel.app/"
      }
  , Project
      { projTitle = "\22269\26908\32034\12450\12503\12522"
      , projDescription = "\22269\26908\32034\12450\12503\12522\n\20844\38283API\12434\20351\29992\12375\12390\22269\24773\22577\12434\21462\24471\12375\12289\22269\21517\12434\26908\32034\12377\12427\12450\12503\12522\12290\n\12479\12452\12500\12531\12464\12466\12540\12512\12392\32016\12389\12369\12383\12426\12289\22269\21517\26908\32034\12384\12369\12391\12394\12367\12424\12426\32048\12363\12356\12289\24030\12420\30476\12289\24066\12394\12393\12434\26908\32034\12377\12427\23455\35013\12418\26908\35342\20013\n"
      , projImage = "/images/projects/country-app.png"
      , projTechnologies = ["React", "TypeScript", "Remix", "Context API", "Tailwind CSS", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/country-app-remix"
      , projLiveUrl = "https://country-app-remix.vercel.app/"
      }
  , Project
      { projTitle = "\31070\23470\31456\24773\22577\29992RAG\12481\12515\12483\12488\12508\12483\12488"
      , projDescription = "\31070\23470\31456\24773\22577\29992RAG\12481\12515\12483\12488\12508\12483\12488\n\35501\12415\36796\12414\12379\12383\12505\12463\12488\12523\24773\22577\12363\12425\31070\23470\31456\12395\38306\12377\12427\24773\22577\12434\21462\24471\12377\12427RAG\12481\12515\12483\12488\12508\12483\12488\n\31934\24230\21521\19978\12398\12383\12417\12505\12463\12488\12523\12398\36817\20284\12398\35519\25972\12420\12289\12487\12540\12479\12398\21306\20999\12426\12398\36969\20999\12363\12364\24517\35201\12381\12358\12290\nAmazon Kendra\12434\20351\12387\12383RAG\12481\12515\12483\12488\12508\12483\12488\12395\20284\12383\25369\21205\n"
      , projImage = "/images/projects/rag-chatbot-akirashingu.jpg"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn/ui", "Vercel", "AstraDB(Apache Cassandra)", "@ai-sdk/react", "OpenAI API", "shadcn", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/rag-skill-match"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "\12479\12452\12500\12531\12464\12466\12540\12512"
      , projDescription = "\12479\12452\12500\12531\12464\12466\12540\12512\n\27096\12293\12394\12514\12540\12489\12434\23455\35013\12290tailWindCSS\12420shadcn\12394\12393\12398\12467\12540\12489\12434\32244\32722\12391\12365\12427\12514\12540\12489\12354\12426\n\21177\26524\38899\12434\36984\25246\12391\12365\12427\12371\12392\12395\12424\12387\12390\22909\12365\12394\21177\26524\38899\12391\12503\12524\12452\12391\12365\12414\12377\n"
      , projImage = "/images/projects/typing-game.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn/ui", "Vercel", "Hono.js", "Redis(Upstash)", "Bun", "shadcn", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/typing-game-hono"
      , projLiveUrl = "https://typing-game-hono.vercel.app/"
      }
  , Project
      { projTitle = "\12496\12531\12461\12531\12464\12450\12503\12522"
      , projDescription = "\12496\12531\12461\12531\12464\12450\12503\12522\12289Sentry\12395\12424\12427\12456\12521\12540\12525\12464\12289\12456\12521\12540\30330\29983\26178\12398\12522\12503\12524\12452\27231\33021\20184\12365\n"
      , projImage = "/images/projects/banking-app.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn/ui", "Vercel", "Sentry", "Appwrite", "Dwolla", "shadcn", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/banking-nextjs"
      , projLiveUrl = "https://banking-horizon-sooty.vercel.app/sign-in"
      }
  , Project
      { projTitle = "\29694\22312\12356\12427\26368\23492\12426\39365\12398\39154\39135\24215\24773\22577\12522\12473\12488\34920\31034\12450\12503\12522"
      , projDescription = "\26368\23492\12426\12398\39365\12398\39154\39135\24215\24773\22577\12522\12473\12488\12434Gooogle Map\12391\34920\31034\12377\12427\12450\12503\12522\n"
      , projImage = "/images/projects/restaurant-around-station.png"
      , projTechnologies = ["Next.js", "TypeScript", "Tailwind CSS", "tRPC", "Prisma", "NextAuth.js", "Google Map API", "shadcn", "lucide-react"]
      , projGithubUrl = ""
      , projLiveUrl = "https://restaurant-around-station.vercel.app/"
      }
  , Project
      { projTitle = "Youtube\21205\30011\12398advanced\26908\32034(\38543\26178\26356\26032\20013)"
      , projDescription = "Youtube\12398\35443\32048\26908\32034\12469\12452\12488\n\20844\24335\12398Youtube\12391\12399\12391\12365\12394\12356\35443\32048\12394\26908\32034\12395\12424\12387\12390\21177\29575\12424\12367\30446\30340\12398\21205\30011\12434\25506\12377\12371\12392\12364\12391\12365\12427\12469\12452\12488\n\26908\32034\26465\20214\12434\38543\26178\26356\26032\12356\12383\12375\12414\12377\12398\12391\12289\12372\35201\26395\12362\21839\12356\21512\12431\12379\12362\24453\12385\12375\12390\12362\12426\12414\12377\12290\n\20182\12398\12469\12540\12499\12473\12398\12496\12540\12472\12519\12531\12418\38283\30330\20104\23450\12391\12377\12290"
      , projImage = "/images/projects/advanced-search-youtube.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn/ui", "Vercel", "Youtube Data API", "shadcn", "lucide-react"]
      , projGithubUrl = ""
      , projLiveUrl = "https://advanced-search-youtube.vercel.app/"
      }
  , Project
      { projTitle = "\12497\12527\12495\12521\35347\32244\65299D\12481\12515\12483\12488\12508\12483\12488"
      , projDescription = "\12497\12527\12495\12521\27671\36074\12398\19978\21496\12395\12394\12426\12365\12387\12383\12481\12515\12483\12488\12508\12483\12488\12392\20250\35441\12364\12391\12365\12427\12450\12503\12522\n\8251\38283\30330\32773\12399\32771\26696\32773\12391\12399\12354\12426\12414\12379\12435\12290\n\20250\35441\12398\20869\23481\12399\12289OpenAI\12398GPT-4\12434\20351\29992\12375\12390\12356\12414\12377\12290\n\20182\12398\12522\12509\12472\12488\12522\12434folk\12375\12390\12289\35201\20214\12395\21512\12358\12424\12358\12395\12459\12473\12479\12510\12452\12474\12375\12390\12356\12414\12377\12290\n\20803\12398\12477\12540\12473\12392\12398\22793\26356\28857\n\12539\12497\12527\12495\12521\19978\21496\12387\12413\12356\20250\35441\20869\23481\n\12539\19968\23450\12398\26399\38291(30\31186)\12372\12392\12395\29305\23450\12398\38899\22768\20184\12365\12481\12515\12483\12488\12434\12508\12483\12488\12364\36865\20449\12377\12427\12290\21313\25968\12497\12479\12540\12531\12354\12426\12414\12377\12290"
      , projImage = "/images/projects/3d-chatbot.png"
      , projTechnologies = ["React", "Typescript", "Next.js", "Styled Components", "Vercel", "Google Text-to-Speech API", "OpenAI API", "babyron.js"]
      , projGithubUrl = "https://github.com/shinguakira/3d-chatbot-power"
      , projLiveUrl = "https://3d-chatbot-power.vercel.app/"
      }
  , Project
      { projTitle = "ChatGPT \12463\12525\12540\12531"
      , projDescription = "\12501\12525\12531\12488Vite,React,\12496\12483\12463Express.js\20351\29992\12398ChatGPT\12463\12525\12540\12531"
      , projImage = "/images/projects/chat-gpt-clone.png"
      , projTechnologies = ["React", "Vite", "Typescript"]
      , projGithubUrl = "https://github.com/shinguakira/gpt-clone"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "\12509\12540\12488\12501\12457\12522\12458Web\12469\12452\12488"
      , projDescription = "\32076\27508\12289\32887\21209\32076\27508\31561\12398\24773\22577\12434\35352\36617"
      , projImage = "/images/profile/developer-pic-1.png?height=400&width=600"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn/ui", "Vercel", "lucide-react"]
      , projGithubUrl = ""
      , projLiveUrl = "/"
      }
  ]

projectsEN :: [Project]
projectsEN =
  [ Project
      { projTitle = "Planned Applications"
      , projDescription = "[Auto-fill Profile Data Across Recruitment Sites]\n[Image Recognition Application]\n[Visual Studio Project File Converter]\n[Matching Application]\n[Advanced Search for Various Websites]\n[Online Meeting Application]\n[Typing Game with 3D Harassment Bot]\n[Typing Game with Google Map Integration]\n[Typing Game with 2D Game Elements]  \n"
      , projImage = "/images/projects/onDeveloping.jpg"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn/ui", "Vercel"]
      , projGithubUrl = ""
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "Brighty Coaching Matching App"
      , projDescription = "Brighty Coaching Matching App\nSame as the one in the history, so omitted\n"
      , projImage = "/images/projects/3dConnectFour.png"
      , projTechnologies = ["Next.js", "React", "TypeScript", "Tailwind CSS", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/electronSample"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "VSCode-Style Portfolio Website"
      , projDescription = "A portfolio website that replicates the Visual Studio Code editor interface.\nFaithfully reproduces title bar, activity bar, sidebar, tabs, terminal, and status bar.\nBrowse 8 portfolio sections (Profile, Projects, Skills, etc.) as if they were files in an IDE.\nFeatures 3 visual themes, bilingual Japanese/English support, and 184 Playwright snapshot tests."
      , projImage = "/images/projects/vscode-portfolio.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "next-intl", "Playwright", "lucide-react", "Vercel"]
      , projGithubUrl = "https://github.com/shinguakira/vscode-portfolio"
      , projLiveUrl = "https://v0-project-steel-nine.vercel.app/"
      }
  , Project
      { projTitle = "VSCode-Style Portfolio Website (Personal Edition)"
      , projDescription = "A personal customization of the VSCode-style portfolio.\nUpgraded to Next.js 16 + React 19 + Tailwind CSS v4.\nFeatures 3 visual theme variants (Modern, Innovative, Professional) per section.\nIncludes extensions gallery, settings panel, tutorial overlay, and git history panel."
      , projImage = "/images/projects/vscode-portfolio.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "next-intl", "Playwright", "lucide-react", "Vercel"]
      , projGithubUrl = "https://github.com/shinguakira/my-vscode-portfolio"
      , projLiveUrl = "https://v0-project-steel-nine.vercel.app/"
      }
  , Project
      { projTitle = "Electron Vite React App"
      , projDescription = "An Electron Vite React app.\nYou can run Python and exe files. It is an app that has all the features of Electron.\nInstallable exe file creation is planned."
      , projImage = "/images/projects/3dConnectFour.png"
      , projTechnologies = ["Electron", "Vite", "React", "TypeScript", "Tailwind CSS", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/electronSample"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "3D Connect Four"
      , projDescription = "A 3D Connect Four game using the KaPlay library.\nRoom matching is implemented. Actual play is planned.\nOne-on-one play with AI, same-screen two-player play, and room matching (planned).\nThe title screen changes randomly. The objects used can also be selected.\n"
      , projImage = "/images/projects/3dConnectFour.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/3d-connect-four"
      , projLiveUrl = "https://3d-connect-four-vfpy.vercel.app/"
      }
  , Project
      { projTitle = "2D Game"
      , projDescription = "A 2D game using the KaPlay library.\nCurrently implementing Game Boy-style graphics based on a story created by ChatGPT.\nBy deliberately using React and React-related libraries for game development,\nI'm learning about the characteristics and optimization of libraries that I might not notice in regular development.\n"
      , projImage = "/images/projects/2d-rpg-react.png"
      , projTechnologies = ["React", "TypeScript", "Remix", "Hono.js", "DB(\26410\23450)", "Tailwind CSS", "lucide-react", "kaPlay"]
      , projGithubUrl = "https://github.com/shinguakira/2d-rpg-react"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "Akira Shingu Information API"
      , projDescription = "An API for retrieving information about Akira Shingu.\nCreated to reduce maintenance time for portfolio creation and resume processing.\nData is defined in JSON without a database.\n"
      , projImage = "/images/projects/portfolio-api.png"
      , projTechnologies = ["TypeScript", "Express.js", "AWS Lambda"]
      , projGithubUrl = "https://github.com/shinguakira/portfolio-api"
      , projLiveUrl = "https://portfolio-api-ten-delta.vercel.app/"
      }
  , Project
      { projTitle = "Country Search App"
      , projDescription = "An application that retrieves and searches for country information using a public API.\nConsidering implementations to link with typing games and search for more detailed information such as states, prefectures, and cities.\n"
      , projImage = "/images/projects/country-app.png"
      , projTechnologies = ["React", "TypeScript", "Remix", "Context API", "Tailwind CSS", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/country-app-remix"
      , projLiveUrl = "https://country-app-remix.vercel.app/"
      }
  , Project
      { projTitle = "RAG Chatbot for Akira Shingu Information"
      , projDescription = "A RAG chatbot that retrieves information about Akira Shingu from loaded vector data.\nRequires adjustment of vector approximation and appropriate data segmentation for accuracy improvement.\nSimilar behavior to an Amazon Kendra-based RAG chatbot.\n"
      , projImage = "/images/projects/rag-chatbot-akirashingu.jpg"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn/ui", "Vercel", "AstraDB(Apache Cassandra)", "@ai-sdk/react", "OpenAI API", "shadcn", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/rag-skill-match"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "Typing Game"
      , projDescription = "A typing game with various modes.\nIncludes modes for practicing Tailwind CSS and shadcn code.\nYou can select different sound effects to play with your preferred audio feedback.\n"
      , projImage = "/images/projects/typing-game.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn/ui", "Vercel", "Hono.js", "Redis(Upstash)", "Bun", "shadcn", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/typing-game-hono"
      , projLiveUrl = "https://typing-game-hono.vercel.app/"
      }
  , Project
      { projTitle = "Banking App"
      , projDescription = "A banking application with Sentry error logging and replay functionality when errors occur.\n"
      , projImage = "/images/projects/banking-app.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn/ui", "Vercel", "Sentry", "Appwrite", "Dwolla", "shadcn", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/banking-nextjs"
      , projLiveUrl = "https://banking-horizon-sooty.vercel.app/sign-in"
      }
  , Project
      { projTitle = "Restaurant Information App for Nearby Stations"
      , projDescription = "An application that displays restaurant information for the nearest station on Google Maps.\n"
      , projImage = "/images/projects/restaurant-around-station.png"
      , projTechnologies = ["Next.js", "TypeScript", "Tailwind CSS", "tRPC", "Prisma", "NextAuth.js", "Google Map API", "shadcn", "lucide-react"]
      , projGithubUrl = ""
      , projLiveUrl = "https://restaurant-around-station.vercel.app/"
      }
  , Project
      { projTitle = "Advanced YouTube Video Search (Regularly Updated)"
      , projDescription = "A detailed search site for YouTube.\nEfficiently find the videos you're looking for with detailed search options not available on the official YouTube site.\nSearch conditions are regularly updated. Please feel free to contact us with your requests.\nPlanning to develop versions for other services as well."
      , projImage = "/images/projects/advanced-search-youtube.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn/ui", "Vercel", "Youtube Data API", "shadcn", "lucide-react"]
      , projGithubUrl = ""
      , projLiveUrl = "https://advanced-search-youtube.vercel.app/"
      }
  , Project
      { projTitle = "Workplace Harassment Training 3D Chatbot"
      , projDescription = "An application where you can converse with a chatbot that acts like a boss with harassment tendencies.\n*Note: I am not the original creator of this concept.\nThe conversation content uses OpenAI's GPT-4.\nI forked another repository and customized it to meet the requirements.\nChanges from the original source:\n- Conversation content mimicking a harassing boss\n- The bot sends specific voice-enabled chats at regular intervals (30 seconds). There are over a dozen patterns."
      , projImage = "/images/projects/3d-chatbot.png"
      , projTechnologies = ["React", "Typescript", "Next.js", "Styled Components", "Vercel", "Google Text-to-Speech API", "OpenAI API", "babyron.js"]
      , projGithubUrl = "https://github.com/shinguakira/3d-chatbot-power"
      , projLiveUrl = "https://3d-chatbot-power.vercel.app/"
      }
  , Project
      { projTitle = "ChatGPT Clone"
      , projDescription = "A ChatGPT clone using Vite, React for frontend and Express.js for backend"
      , projImage = "/images/projects/chat-gpt-clone.png"
      , projTechnologies = ["React", "Vite", "Typescript"]
      , projGithubUrl = "https://github.com/shinguakira/gpt-clone"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "Portfolio Website"
      , projDescription = "A website showcasing my background, work history, and other professional information"
      , projImage = "/images/profile/developer-pic-1.png?height=400&width=600"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn/ui", "Vercel", "lucide-react"]
      , projGithubUrl = ""
      , projLiveUrl = "/"
      }
  ]
