import { Dimensions, Platform, PixelRatio } from 'react-native';
    const baseSuperEff = 1.6;
    const baseNotVeryEff = 0.625;
    const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    } = Dimensions.get('window');

    const scale = SCREEN_WIDTH / 380;

    export function normalize(size) {
        const newSize = size * scale 
        if (Platform.OS === 'ios') {
            return Math.round(PixelRatio.roundToNearestPixel(newSize))
        } else {
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
        }
    }
    export function Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    export function FindString(str, toFind) {
       return str.search(toFind);
    }
    export function percent(value, opt) {
        const MaxAtk = 414;
        const MaxDef = 396;
        const MaxStm = 496;
        const MaxCP  = 5441;
        
        switch(opt) {
            case 'CP': {
                if (value <= 0) return 0;
                return ((value)/MaxCP);
            }
            case 'atk': {
                if (value <= 0) return 0;
                return ((value)/MaxAtk);
            }
            case 'def': {
                if (value <= 0) return 0;
                return ((value)/MaxDef);
            }
            case 'stm': {
                if (value <= 0) return 0;
                return ((value)/MaxStm);
            }
        }
    }

    export const damageMultis = {
        se1x: baseSuperEff,
        se2x: Math.pow(baseSuperEff, 2),
        se3x: Math.pow(baseSuperEff, 3),
        ne1x: baseNotVeryEff,
        ne2x: Math.pow(baseNotVeryEff, 2),
        ne3x: Math.pow(baseNotVeryEff, 3)
    };
    export const stab = 1.2;
    export const weather = 1.2;
    export const raidBossStamina = [
        600,
        1800,
        3600,
        9000,
        15000
    ];
    export const raidBossLvl = [
        20,
        25,
        30,
        40,
        40
    ];
    export const raidBossCpM = [
        0.59740001,
        0.667934,
        0.7317,
        0.7903,
        0.7903
    ];

    export const cpmPerLevel = [0.0940000, 0.1351374, 0.1663979, 0.1926509, 0.2157325, 0.2365727, 0.2557201, 0.2735304, 0.2902499, 0.3060574, 0.3210876, 0.3354450, 0.3492127, 0.3624578, 0.3752356, 0.3875924, 0.3995673, 0.4111936, 0.4225000, 0.4335117, 0.4431076, 0.4530600, 0.4627984, 0.4723361, 0.4816850, 0.4908558, 0.4998584, 0.5087018, 0.5173940, 0.5259425, 0.5343543, 0.5426358, 0.5507927, 0.5588306, 0.5667545, 0.5745692, 0.5822789, 0.5898879, 0.5974000, 0.6048188, 0.6121573, 0.6194041, 0.6265671, 0.6336492, 0.6406530, 0.6475810, 0.6544356, 0.6612193, 0.6679340, 0.6745819, 0.6811649, 0.6876849, 0.6941437, 0.7005429, 0.7068842, 0.7131691, 0.7193991, 0.7255756, 0.7317000, 0.7347410, 0.7377695, 0.7407856, 0.7437894, 0.7467812, 0.7497610, 0.7527291, 0.7556855, 0.7586304, 0.7615638, 0.7644861, 0.7673972, 0.7702973, 0.7731865, 0.7760650, 0.7789328, 0.7817901, 0.7846370, 0.7874736, 0.79030001];

    export function CalculateCombatPower(pokemon, level = 40, ivs = { atk: 15, def: 15, stm: 15}) {
        var cpm = cpmPerLevel[2 * level - 2];
        var Attack = Number(pokemon.atk) + ivs.atk;
        var Defense = Number(pokemon.def) + ivs.def;
        var Stamina = Number(pokemon.stm) + ivs.stm;
        
        console.log(Attack)
        return Math.floor(
            (Attack * Math.pow(Defense, 0.5) * Math.pow(Stamina, 0.5) * Math.pow(cpm, 2)) 
        / 10);
    }
    
    export function CalculateBossCombatPower(pokemon, tier = 1) {
        var Attack  = (pokemon.atk + 15);
        var Defense = (pokemon.def + 15);
        var Stamina = raidBossStamina[tier];
    
        return Math.floor((Attack * Math.pow(Defense, 0.5) * Math.pow(Stamina, 0.5)) / 10);
    }

    export function CalculateHP(staminaStat, level = 30, staIV = 15) {
        var CP_Multiplier = cpmPerLevel[2 * level - 2]; 
        var Stamina = staminaStat + staIV;
    
        return Stamina * CP_Multiplier;
    }

    export function translate(view) {
        switch(view) {
            case "ListaPkms": {
                return{
                    en: {
                        placeholder: {
                            name: "Searching for Name...",
                            gen: "Searching for Generation...",
                            n: "Searching for Pokémon's number...",
                            type: "Searching for Pokémons's type...",
                        },
                        modal: {
                            title: "Enter in \"Momozinho\" mode?",
                            cancel: "Cancel",
                            reset: "Reset",
                            set: "Yes",
                            close: "Close",
                            readmore: "Read more..."
                        },
                        toggle: {
                            menu: "Menu",
                            type: "Type",
                            name: "Name",
                            gen: "Gen",
                            n: "Num"
                        }
                    },
                    pt: {
                        placeholder: {
                            name: "Pesquisando por Nome...",
                            gen: "Pesquisando por Geração...",
                            n: "Pesquisando pelo Núnero do Pokémon...",
                            type: "Pesquisando pelo Tipo do Pokémon...",
                        },
                        modal: {
                            title: "Ativar modo \"Momozinho\"?",
                            cancel: "Cancelar",
                            reset: "Resetar",
                            set: "Sim",
                            close: "Fechar",
                            readmore: "Leia mais..."
                        },
                        toggle: {
                            menu: "Menu",
                            type: "Tipo",
                            name: "Nome",
                            gen: "Gen",
                            n: "Num"
                        }
                    }
                }
            }
            case "Settings": {
                return{
                    en: {
                        header: "Settings",
                        theme: {
                            title: "Dark Theme",
                            desc: "Set dark theme."
                        },
                        lang: {
                            title: "Language pt-br",
                            desc: "Set pt-br language."
                        },
                        menuSide: {
                            title: "Menu bar to right",
                            desc: "This settings will change the slide direction menu"
                        },
                        clear: {
                            title: "Clear Data",
                            desc: "Clear user data settings."
                        }
                    },
                    pt: {
                        header: "Configurações",
                        theme: {
                            title: "Tema escuro",
                            desc: "Ativar tema escuro."
                        },
                        lang: {
                            title: "Idioma pt-br",
                            desc: "Ativar idioma em pt-br."
                        },
                        menuSide: {
                            title: "Menu para a direita",
                            desc: "Essa configuração mudará a direção do menu"
                        },
                        clear: {
                            title: "Limpar dados",
                            desc: "Limpar toda configuração do usuário."
                        }
                    },                    
                }
            }
            case "PkmInfo": {
                return {
                    en: {
                        pkm: {
                            description: "Description:",
                            height: "Height",
                            weight: "Weight",
                            gender: "Gender",
                            type: "Type"
                        },
                        weak: {
                            title: "Weak against"
                        },
                        strong: {
                            title: "Strong against"
                        },
                        weather: {
                            title: "Weather"
                        },
                        cpFor: "CP List",
                        pkmAtks: "Atack list"
                    },
                    pt: {
                        pkm: {
                            description: "Descrição:",
                            height: "Altura",
                            weight: "Peso",
                            gender: "Gênero",
                            type: "Tipo"
                        },
                        weak: {
                            title: "Fraco contra"
                        },
                        strong: {
                            title: "Forte contra"
                        },
                        weather: {
                            title: "Clima"
                        },
                        cpFor: "Lista de CP",
                        pkmAtks: "Lista de Ataques"
                    },                                      
                }
            }
            case "Loading": {
                return {
                    en: {
                        loading: {
                            title: "Loading..."
                        }
                    },
                    pt: {
                        loading: {
                            title: "Carregando..."
                        }
                    }, 
                }
            }
            case "Itens": {
                return {
                    en: {
                        header: {
                            capture: "Pokeball / Berry",
                            potion: "Potions / Revives",
                            egg: "Eggs / Incubators",
                            lvlup: "Evolve Itens",
                            other: "Other Itens"
                        },
                        modal: {
                            close: "Close"
                        }
                    },
                    pt: {
                        header: {
                            capture: "Poké Bolas / Frutas",
                            potion: "Poção / Reviver",
                            egg: "Ovos / Incubadoras",
                            lvlup: "Itens de Evolução",
                            other: "Outros Itens"
                        },
                        modal: {
                            close: "Fechar"
                        }
                    }, 
                    Capture: {
                        en: {
                            Pokeball: {
                                label: "Poke Ball",
                                description: "A device for catching wild Pokémon. It's thrown like a ball, comfortably encapsulating its target.\n\nCoins: 100 - 20x\nCoins: 460 - 100x\nCoins: 800 - 200x\n\nThese are regular Pokeballs and can be purchased through the Pokemon Go Shop."
                            },
                            Greatball: {
                                label: "Great Ball",
                                description: "A high-performance ball with a higher catch rate than a standard Pokéball.\n\nGreat Pokeballs cannot be purchased through shop. These Poke Balls have higher chance to capture Pokemon then regular ones."
                            },
                            Ultraball: {
                                label: "Ultra Ball",
                                description: "An ultra-performance ball with a higher catch rate than a Great Ball.\n\nUltra Pokeballs are the best in Pokemon Go. Ultra Balls have the highest capture rate out of all the available balls."
                            },
                            Premierball: {
                                label: "Premier Ball",
                                description: "It is special type of Poké Ball for capturing a Raid Boss in Bonus Challenge after defeating it in Raid Battle.\n\nBased on which Trainers controlled the Gym, how much each Trainer contributed as a team during the Raid Battle, each Trainer will receive a variable number of Premier Balls.\n\nIt unlocks at level 5.\n\n These can be used to capture the Raid Boss, once it has been defeated. It is also used to capture Shadow Pokémon after their defeat.\n\n(Note): Unused Premier Balls are discarded after an encounter."
                            },
                            Nanab: {
                                label: "Nanab",
                                description: "Feed this to a Pokémon to calm it down, making it less erratic.\n\nDetails: Nanab Berry is kind of berry that will slow a Pokémon's movement up to 95%, making it easier to capture on the Trainer's next attempt.\n\nUnlocked at Level: They can be obtained by trainer at Level 1 and higher.\n\nHow to Get: Just like two other kinds of berries, Nanab Berries can be obtained from spinning Photo Disc at PokéStops and Gyms and as reward for leveling up.\n\n(Note): It is particularly useful on hovering Pokémon that move around. There are several such move patterns: darting from one spot to another rapidly (Magnemite), moving about smoothly (Abra), or flying upwards and staying for some time (Pidgeotto, Golbat)"
                            },
                            Pinap: {
                                label: "Pinap",
                                description: "Feed this to a Pókemon to receive more Candy when you catch it.\n\nDetails: Pinap Berry is kind of berry that when fed a Pokémon while trying to capture it, it will double the amount of Candy the Trainer will receive if their next capture attempt is successful.\n\nUnlocked at Level: They can be obtained by trainer at Level 18 and higher.\n\nHow to Get: Just like two other kinds of berries, Pinap Berries can be obtained from spinning Photo Disc at PokéStops and Gyms and as reward for leveling up.\n\n(Note): It is particularly useful on Pokémon that are the 2nd and 3rd stages of their evolution line, as they drop more candy (5 and 10 respectively) than their 1st stage form (only 3 candies). However, those Pokémon are also usually harder to catch, making it more likely to break out and waste the berry."
                            },
                            Razz: {
                                label: "Razz",
                                description: "Feed this to a Pókemon to make it easier to catch.\n\nDetails: Razz Berry is kind of berry that when fed a Pokémon while trying to capture it increases the chance of success.\n\nUnlocked at Level: They can be obtained by trainer at Level 8 and higher.\n\nHow to Get: Just like two other kinds of berries, Razz Berries can be obtained from spinning Photo Disc at PokéStops and Gyms and as reward for leveling up."
                            },
                            SilverPinap: {
                                label: "Silver Pinap",
                                description: "Feed this to a Pókemon to receive more Candy when catch it and make it easier to catch.\n\nDetails: Silver Pinap Berries increases a Trainer's chance of catching an encountered Pokémon by 1.8 times and doubles the amount of Candy given when Pokémon is successfully caught.\n\nHow to Get: They can be obtained by completing certain Field Research tasks as well as being rewarded for progressing through the later stages of A Ripple in Time and A Spooky Message."
                            },
                            GoldenRazz: {
                                title: "Golden Razz",
                                label: "Golden Razz",
                                description: "Feed this to a Pokémon to make it much easier to catch. Feed this to a Pokémon on a Gym to fully restore its motivation.\n\nDetails: Golden Razz Berries will greatly increase a Trainer's chances of catching a Pokémon they encounter in the wild and can also be given to a Pokémon assigned to a Gym to fully recover its motivation meter.\n\nHow to Get: This kind of berry can be only obtained as a reward from Raid Battle."
                            }
                        },
                        pt: {
                            Pokeball: {
                                label: "Poké Bola",
                                description: "Um dispositivo para capturar Pokémon selvagens. É lançado como uma bola em um Pokémon, encapsulando confortavelmente seu alvo.\n\nMoedas: 100 - 20x\nMoedas: 460 - 100x\nMoedas: 800 - 200x\n\nA Poké Bola é a mais comum e também o dispositivo de nível mais baixo para capturar Pokémon selvagens, ela pode ser comprada na loja."
                            },
                            Greatball: {
                                label: "Grande Bola",
                                description: "A Grande Bola é um dispositivo de alto desempenho que oferece uma taxa de captura mais alta que uma Poké Bola padrão.\n\nA Grande Bola não podem ser compradas na loja. Essa Poke Bola tem maior chance de capturar do que as normais"
                            },
                            Ultraball: {
                                label: "Ultra Bola",
                                description: "Uma Poké Bola de desempenho ultra alto que fornece uma taxa de captura de Pokémon mais alta que uma Grande Bola.\n\nA Ultra Bola é a melhor entre todas, além de ter a maior taxa de captura de todas as bolas disponíveis no jogo."
                            },
                            Premierball: {
                                label: "Bola Prêmio",
                                description: "É um tipo especial de Poké Bola para capturar Pokémon de Raide, depois de derrotá-lo na batalha.\n\nCom base em quais treinadores controlavam o ginasio, quanto cada treinador contribuiu como equipe durante a batalha, os treinadores receberão um número variável de Bola Prêmio.\n\nDesbloqueia no nível 5.\n\nElas podem ser usados para capturar o Pokémon de Raide, uma vez que for derrotado. Também é usado para capturar Pokémon das Sombras após sua derrota.\n\n(Nota): As Bolas Prêmio que não forem utilizadas são descartadas após um encontro."
                            },
                            Nanab: {
                                label: "Anaba",
                                description: "Dê esta fruta a um pokémon para acalmá-lo e torná-lo menos imprevisível.\n\nDetalhes: Anaba é um tipo de fruta que desacelera o movimento de um Pokémon em até 95%, facilitando a captura na próxima tentativa de pegá-lo.\n\nDesbloqueia no nível: eles podem ser obtidos pelo treinador no nível 1 e superior.\n\nComo obter: Assim como outros dois tipos de frutas, Anaba pode ser obtido rodando PokéStops e Ginásios e como recompensa por subir de nível.\n\n(Nota): É particularmente útil contra Pokémons que se movem muito. Existem vários padrões de movimento: ir de um ponto para outro rapidamente (Magnemite), mover-se suavemente (Abra) ou voar para cima e permanecer por algum tempo (Pidgeotto, Golbat)."
                            },
                            Pinap: {
                                label: "Caxí",
                                description: "Dê esta fruta a um pokémon para receber mais doces ao pegá-lo.\n\nDetalhes: Caxí é uma espécie de fruta que, quando um Pokémon é alimentado por ela enquanto tenta capturá-lo, dobrará a quantidade de doces que o treinador receberá se sua próxima tentativa de captura for bem-sucedida.\n\nDesbloqueado no nível: eles podem ser obtidos pelo treinador no nível 18 e superior.\n\nComo obter: Assim como outros dois tipos de frutas, a Caxí pode ser obtido rodando PokéStops e Ginásios e como recompensa por subir de nível."
                            },
                            Razz: {
                                label: "Frambo",
                                description: "Dê esta fruta a um pokémon para pegá-lo com mais facilidade.\n\nDetalhes: Frambo é uma espécie de fruta que, quando um Pokémon é alimentado por ela, aumenta a chance de sucesso na captura.\n\nDesbloqueado no nível: eles podem ser obtidos pelo treinador no nível 8 e superior.\n\nComo obter: Assim como outros dois tipos de frutas, a Frambo pode ser obtido rodando PokéStops e Ginásios e como recompensa por subir de nível."
                            },
                            SilverPinap: {
                                label: "Caxí Prateada",
                                description: "Dê esta fruta a um pokémon para receber mais doces ao pegá-lo. Será mais fácil pegar Pokemon com ela.\n\nDetalhes: Caxí Prateada aumenta a chance do treinador de encontrar um Pokémon em 1,8x e dobra a quantidade de doces quando o Pokémon é capturado com sucesso.\n\nComo obter: Eles podem ser obtidos através da realização de determinadas tarefas de pesquisa de campo, além de serem recompensados por progredir nos estágios posteriores das Pesquisas Especiais: Uma oscilação no Tempo e Uma Mensagem Assustadora."
                            },
                            GoldenRazz: {
                                title: "Frambo Dourada",
                                label: "Fr. Dourada",
                                description: "Dê isto a um Pokémon para pegá-lo com mais facilidade.\n\nDetalhes: Frambo Dourada aumentará muito as chances de um treinador pegar um Pokémon que encontrar na natureza e também pode ser dado a um Pokémon designado para um ginásio para recuperar completamente seu medidor de motivação.\n\nComo obter: Esse tipo de fruta só pode ser obtido como recompensa da Batalha de Raide."
                            }
                        }
                    },
                    Eggs: {
                        en: {
                            EggIncubator1: {
                                title: "∞",
                                label: "Egg Incubator ∞",
                                description: "A device that incubates an Egg as you walk until it's ready to hatch Unlimited use!\n\nYou can use this as many times as you want. \n\nPokemon GO Hatching Strategy: Using your orange incubator on 2KM Eggs is better than wasting your blue limited uses."
                            },
                            EggIncubator2: {
                                title: "Egg Incubator",
                                label: "Egg Incubator",
                                description: "A device that incubates an Egg as you walk until it is ready to hatch. Break after 3 uses.\n\nCoins: 150 - 1x\n\nYou can only use this 3 times before it breaks."
                            },
                            SuperIncubator: {
                                title: "Super Incubator",
                                label: "Super Incubator",
                                description: "A more powerful Egg incubator that helps Eggs hatch quickly. Break after 3 uses.\n\nCoins: 200 - 1x\n\nIt has distance multiplayer of 0.6666, which will Hatch Eggs 1.5 Times Faster than Regular Egg Incubators."
                            },
                            Egg2: {
                                label: "Egg 2km",
                                description: "Bulbasaur, Charmander Squirtle, Abra, Gastly, Magikarp, Shellder, Krabby, Chikorita, Cyndaquil, Totodile, Midsreveaus, Igglybuff, Mudkip, Treecko, Meditite, Spoink, Torchic, Luvdisc, Wailmer, Togepi, Poochyena,  Pichu, Cleffa, Swinub, Swablu, Makuhita,  Machop, Aron, Turtwig, Piplup, Chimchar, Kricketot, Bonsly, Barboach, Spheal, Kricketot, Starly, Bidoof."
                            },
                            Egg5: {
                                label: "Egg 5km",
                                description: "Eevee, Lickitung, Sandshrew, Ponyta, Horsea, Psyduck, Cubone, Seel, Rhyhorn, Kabuto, Omanyte, Tangela, Gligar, Pineco, Yanma, Sneasel, Houndor, Mareep, Skarmory, Smoochum, MAgby, Cacnea, Anorith, Lileep, Lotad, Duskull, Trapinch, Shuppet, Wynaut, Clamperl, Buneary, Budew, Snover, Bronzor, Croagunk, Combee, Buizel, Skorupi, Finneon, Drifloon, Glameow, Cheubi, Hippopotas, Wynaut, Wingull, Tyrogue, Snorunt, Shuckle, Scyther, Pineco, Onix, Nosepass, Mudkip, Mantine, Girafarig, Elekid, Corphish, Baltoy, Azurill, Buneary."
                            },
                            Egg7: {
                                label: "Egg 7km",
                                description: "Alola Diglett, Alola Geodude, Alola Grimer, Alola Meowth, Alola Sandshrew, Alola Vulpix, Pichu, Cleffa, Igglybuff, Togepi, Smoochum, Tyrogue , Elekid, Magby, Azurill, Wynaut, Bonsly, Budew, Chingling, Munchlax, Mantyke, Riolu, Happiny."
                            },
                            Egg10: {
                                label: "Egg 10km",
                                description: "Aerodactyl, Lapras, Ralts, Slakoth, Mawile, Nincada, Sableye, Absol, Shieldon, Cranidos, Happiny, Munchlax, Chingling, Gible, Chansey,Porygon, Mareep, Beldum, Bagon, Lavitar, Feebas, Dratini, Shinx, Riolu."
                            }
                        },
                        pt: {
                            EggIncubator1: {
                                title: "∞",
                                label: "Incubadora de Ovo ∞",
                                description: "Em construção"
                            },
                            EggIncubator2: {
                                title: "Incubadora",
                                label: "Incubadora de Ovo",
                                description: "Em construção"
                            },
                            SuperIncubator: {
                                title: "Sup.Incubadora",
                                label: "Super Incubadora",
                                description: "Em construção"
                            },
                            Egg2: {
                                label: "Ovo de 2km",
                                description: "Bulbasaur, Charmander Squirtle, Abra, Gastly, Magikarp, Shellder, Krabby, Chikorita, Cyndaquil, Totodile, Midsreveaus, Igglybuff, Mudkip, Treecko, Meditite, Spoink, Torchic, Luvdisc, Wailmer, Togepi, Poochyena,  Pichu, Cleffa, Swinub, Swablu, Makuhita,  Machop, Aron, Turtwig, Piplup, Chimchar, Kricketot, Bonsly, Barboach, Spheal, Kricketot, Starly, Bidoof."
                            },
                            Egg5: {
                                label: "Ovo de 5km",
                                description: "Eevee, Lickitung, Sandshrew, Ponyta, Horsea, Psyduck, Cubone, Seel, Rhyhorn, Kabuto, Omanyte, Tangela, Gligar, Pineco, Yanma, Sneasel, Houndor, Mareep, Skarmory, Smoochum, MAgby, Cacnea, Anorith, Lileep, Lotad, Duskull, Trapinch, Shuppet, Wynaut, Clamperl, Buneary, Budew, Snover, Bronzor, Croagunk, Combee, Buizel, Skorupi, Finneon, Drifloon, Glameow, Cheubi, Hippopotas, Wynaut, Wingull, Tyrogue, Snorunt, Shuckle, Scyther, Pineco, Onix, Nosepass, Mudkip, Mantine, Girafarig, Elekid, Corphish, Baltoy, Azurill, Buneary."
                            },
                            Egg7: {
                                label: "Ovo de 7km",
                                description: "Alola Diglett, Alola Geodude, Alola Grimer, Alola Meowth, Alola Sandshrew, Alola Vulpix, Pichu, Cleffa, Igglybuff, Togepi, Smoochum, Tyrogue , Elekid, Magby, Azurill, Wynaut, Bonsly, Budew, Chingling, Munchlax, Mantyke, Riolu, Happiny."
                            },
                            Egg10: {
                                label: "Ovo de 10km",
                                description: "Aerodactyl, Lapras, Ralts, Slakoth, Mawile, Nincada, Sableye, Absol, Shieldon, Cranidos, Happiny, Munchlax, Chingling, Gible, Chansey,Porygon, Mareep, Beldum, Bagon, Lavitar, Feebas, Dratini, Shinx, Riolu."
                            }
                        }
                    },
                    lvlup: {
                        en: {
                            RareCandy: {
                                label: "Rare Candy",
                                description: "A mysterious candy. When used on a Pokémon, it turns into the Pokémon's Candy.\n\nThe Rare Candy can transform into Candy for any Pokémon.\n\nFor example: when used on a Pikachu, one Rare Candy turns into one Pikachu Cand. \n\nObtaining: You can obtain Pokemon GO Rare Candy exclusively only from Raid Boss Battles."
                            },
                            DragonScale: {
                                title: "Dragon Scale",
                                label: "Dragon Scale",
                                description: "A scale that can make certain species of Pokémon evolve. It is very tough and inflexible.\n\nPokémon: Seadra / Evolution: Kingdra"
                            },
                            KingsRock: {
                                label: "King's Rock",
                                description: "A rock that can make certain species of Pokémon evolve. It looks like a crown.\n\nPokémon: Poliwhirl / Evolution: Politoed \nPokémon: Slowpoke / Evolution: Slowking"
                            },
                            MetalCoat: {
                                title: "Metal Coat",
                                label: "Metal Coat",
                                description: "A coating that can make certain species of Pokémon evolve. It is a special metallic film.\n\nPokémon: Onix / Evolution: Steelix \nPokémon: Scyther / Evolution: Scizor"
                            },
                            SinnohStone: {
                                title: "Sinnoh Stone",
                                label: "Sinnoh Stone",
                                description: "A special stone originally found in the Sinnoh region that can make certain species of Pokémon evolve. It is very tough and has a beautiful sheen.\n\nPokémon: Electabuzz / Evolution:Electivire\nPokémon: Sneasel / Evolution: Weavile\nPokémon: Roselia / Evolution: Roserade\nPokémon: Rhydon / Evolution: Rhyperionr\nPokémon: Murkrow / Evolution: Honchkrow\nPokémon: Porygon2 / Evolution: PorygonZ\nPokémon: Togetic / Evolution: Togekiss\nPokémon: Magmar / Evolution: Magmortar\nPokémon: Misdreavus / Evolution: Mismagius\nPokémon: Gligar / Evolution: Gliscor\nPokémon: Dusclops / Evolution: Dusknoir\nPokémon: Swinub / Evolution: Mamoswine\nPokémon: Aipom / Evolution: Ambinpom\nPokémon: Yanma / Evolution: Yanmega\nPokémon: Tangela / Evolution: Tangrowth\nPokémon: Lickitung / Evolution: Lickilicky\nPokémon: Kirlia / Evolution: Gallade\nPokémon: Snorunt / Evolution: Froslass"
                            },
                            SunStone: {
                                title: "Sun Stone",
                                label: "Sun Stone",
                                description: "A peculiar stone that can make certain species of Pokémon evolve. It burns as red as the evening sun.\n\nPokémon: Gloom / Evolution: Bellossom \nPokémon: Sunkern / Evolution: Sunflora"
                            },
                            Upgrade: {
                                title: "Upgrade",
                                label: "Upgrade",
                                description: "A transparent device that make certain species of Pokémon evolve. It was produced by Silph Co.\n\nPokémon: Porygon / Evolution: Porygon2"
                            },
                            FastTm: {
                                title: "Fast TM",
                                label: "Fast TM",
                                description: "This Technical Machine teaches the Pokémon a new Fast Attack.\n\nUnlocked at Level: 15.\n\nHow it Works: Teaches your Pokemon a New Random Fast Move.\n\nHow to Get: Drops in Raid Battles."
                            },
                            ChangedTm: {
                                title: "Charged TM",
                                label: "Charged TM",
                                description: "This Technical Machine teaches the Pokémon a new Charged Attack.\n\nUnlocked at Level: 25.\n\nHow it Works: Teaches your Pokemon a New Random Charged Move.\n\nHow to Get: Drops in Raid Battles."
                            }
                        },
                        pt: {
                            RareCandy: {
                                label: "Doce Raro",
                                description: "Doces Misteriosos, quando usado em qualquer Pokémon, ele se transforma no doce do Pokémon.\n\nO Doce Raro pode se transformar em doce para qualquer Pokémon.\n\nPor exemplo: quando usado em um Pikachu, um Doce Raro se transforma em um doce de Pikachu.\n\nObtido: Como recompensa de Batalhas de Raide, Tarefas de Pesquisa e Batalha de Treinadores."
                            },
                            DragonScale: {
                                title: "Esc. de Dragão",
                                label: "Escama de Dragão",
                                description: "Uma escama que pode fazer com que certas espécies de Pokémon evoluam. É muito resistente e inflexível.\n\nPokémon: Seadra / Evolução: Kingdra"
                            },
                            KingsRock: {
                                label: "Pedra do Rei",
                                description: "Uma rocha que pode fazer com que certas espécies de Pokémon evoluam. Parece uma coroa.\n\nPokémon: Poliwhirl / Evolução: Politoed \nPokémon: Slowpoke / Evolução: Slowking"
                            },
                            MetalCoat: {
                                title: "R. Metálico",
                                label: "Revestimento Metálico",
                                description: "Um revestimento que pode fazer com que certas espécies de Pokémon evoluam. É um filme metálico especial.\n\nPokémon: Onix / Evolução: Steelix\nPokémon: Scyther / Evolução: Scizor"
                            },
                            SinnohStone: {
                                title: "P. de Sinnoh",
                                label: "Pedra de Sinnoh",
                                description: "Uma pedra especial originalmente encontrada na região de Sinnoh que pode fazer com que certas espécies de Pokémon evoluam. É muito resistente e tem um brilho bonito.\n\nPokémon: Electabuzz / Evolução: Electivire\nPokémon: Sneasel / Evolução: Weavile\nPokémon: Roselia / Evolução: Roserade\nPokémon: Rhydon / Evolução: Rhyperionr\nPokémon: Murkrow / Evolução: Honchkrow\nPokémon: Porygon2 / Evolução: PorygonZ\nPokémon: Togetic / Evolução: Togekiss\nPokémon: Magmar / Evolução: Magmortar\nPokémon: Misdreavus / Evolução: Mismagius\nPokémon: Gligar / Evolução: Gliscor\nPokémon: Dusclops / Evolução: Dusknoir\nPokémon: Swinub / Evolução: Mamoswine\nPokémon: Aipom / Evolução: Ambinpom\nPokemon: Yanma / Evolução: Yanmega\nPokémon: Tangela / Evolução: Tangrowth\nPokémon: Lickitung / Evolução: Lickilicky\nPokémon: Kirlia / Evolução: Gallade\nPokémon: Snorunt / Evolução: Froslass"
                            },
                            SunStone: {
                                title: "Pedra Solar",
                                label: "Pedra Solar",
                                description: "Uma pedra peculiar que pode fazer com que certas espécies de Pokémon evoluam. Queima tão vermelho quanto o sol da tarde.\n\nPokémon: Gloom / Evolução: Bellossom \nPokémon: Sunkern / Evolução: Sunflora"
                            },
                            Upgrade: {
                                title: "Melhora",
                                label: "Melhora",
                                description: "Um dispositivo transparente que pode fazer com que certas espécies de Pokémon evoluam. Foi produzido pela Silph Co.\n\nPokémon: Porygon / Evolução: Porygon2"
                            },
                            FastTm: {
                                title: "Atk.Ágil",
                                label: "MT Ataque Ágil",
                                description: "Essa Máquina de Técnica ensina um novo ataque ágil a um Pokémon.\n\nDesbloqueado no nível: 15.\n\nComo funciona: Ao utilizar em um Pokémon, ele aprenderá um novo ataque ágil aleatório.\n\nComo obter: Adquirido em batalhas de Raide."
                            },
                            ChangedTm: {
                                title: "Atk.Carregado",
                                label: "MT Ataque Carregado",
                                description: "Esta Máquina de Técnica ensina um novo ataque carregado a um Pokémon.\n\nDesbloqueado no nível: 25.\n\nComo funciona: Ao utilizar em um Pokémon, ele aprenderá um novo ataque carregado aleatório.\n\nComo obter: Adquirido em batalhas de Raide."
                            }
                        }
                    },
                    Potion: {
                        en: {
                            Potion: {
                                label: "Potion",
                                description: "A spray-type medicine for treating wounds. It restores the HP of one Pokémon by 20 points.\n\nUnlocked at Level: 5.\n\nRestores: 20 HP."
                            },
                            SuperPotion: {
                                label: "Super Potion",
                                description: "A spray-type medicine for treating wounds. It restores the HP of one Pokémon by 50 points.\n\nUnlocked at Level: 10.\n\nRestores: 50 HP."
                            },
                            HyperPotion: {
                                label: "Hyper Potion",
                                description: "A spray-type medicine for treating wounds. It restores the HP of one Pokémon by 200 points.\n\nUnlocked at Level: 15.\n\nRestores: 200 HP."
                            },
                            MaxPotion: {
                                label: "Max Potion",
                                description: "A spray-type medicine that completely restores all HP of a single Pokémon.\n\nCoins: 200 - 10x\n\nUnlocked at Level: 25.\n\nRestores: Completely restores the Max HP."
                            },
                            Reviver: {
                                label: "Revive",
                                description: "A medicine that can revive fainted Pokémon. It also restores half of a fainted Pokémon's maximum HP.\n\nUnlocked at Level: 5\n\nRestores: Revives Pokemon With Half of its Max HP."
                            },
                            MaxReviver: {
                                label: "Max Revive",
                                description: "A medicine that can revive fainted Pokémon. It also fully restores a fainted Pokémon's maximum HP.\n\nCoins: 180 - 6x\n\nUnlocked at Level: 30\n\nRestores: Revives Pokemon With the full of its Max HP Restored."
                            },
                        },
                        pt: {
                            Potion: {
                                label: "Poção",
                                description: "Em construção"
                            },
                            SuperPotion: {
                                label: "Super Poção",
                                description: "Em construção"
                            },
                            HyperPotion: {
                                label: "Hiper Poção",
                                description: "Em construção"
                            },
                            MaxPotion: {
                                label: "Poção Máxima",
                                description: "Em construção"
                            },
                            Reviver: {
                                label: "Reviver",
                                description: "Em construção"
                            },
                            MaxReviver: {
                                title: "Máximo Reviver",
                                label: "Máximo Rev.",
                                description: "Em construção"
                            },
                        }  
                    },
                    Other: {
                        en: {
                            Gift: {
                                title: "Gift",
                                label: "Gift",
                                description: "A box that you can send to a friend. Contains a variety of useful items.\n\nDetails: A Gift is an item that can be sent to another Trainer. Gifts contain items that are of higher value than what Trainers normally obtain from spinning PokéStops, supporting the feeling that your friends are really helping you make the best of your Pokémon GO journey.\n\nOnly one gift can be sent to each Friend per day and at most 20 Gifts that can be opened in a single day.\nTrainers may have up to ten Gifts in their bag at any given time and they do not take up any space in the bag.\nIn order to obtain 7-km Egg from the received gift, trainer needs space in their eggs collection, exactly like in case of obtaining eggs from Photo Discs.\n\n(Note):There must be enough room in the Item Bag, before opening the gift."
                            },
                            Incense: {
                                title: "Gift",
                                label: "Gift",
                                description: "Incense with a mysterious fragrance that lures wild Pokémon to your location for 30 minutes.\n\nCoins: 80 - 1x\nCoins: 500 - 8x\n\nUnlock more at Levels: 7 – 10 – 15 – 20 – 25 – 30 – 35 – 40 they receive one Incense.\nat level 20 two of them, at level 30 three and at level 40 four Incenses.\n\nDetails: Incense, when activated, shows a pinkish aura around the Trainer. The effect will follow a trainer if the trainer continues to travel, though part of the appeal is being able to keep catching while remaining in one place. Pokémon lured by the incense will also have a pink aura.\n\nSpawns are based on the local biome the player is in.\n\nThis item cannot be obtained from a PokéStop itself. However, it can be received by reaching certain levels, or by purchasing it from the Shop for PokeCoin 80. A bundle containing eight Incenses can be purchased for PokeCoin 500 as well. It can be also rewarded for completing set of Special Research tasks.\n\n(Note): The Pokémon spawned by the incense do not exist in the \"Nearby box\". It spawns new Pokémon for a trainer to catch. The incense will spawn 1 Pokémon every 5 minutes if the trainer is standing still, and 1 Pokémon every 1 minute or 200 meters (whichever happens first) while moving. Other trainers are not affected by this item.",
                            },
                            LuckyEgg: {
                                title: "Lucky Egg",
                                label: "Lucky Egg",
                                description: "A Lucky Egg that's filled with happiness! Earns double XP for 30 minutes.\n\nCoins: 80 - 1x\nCoins: 500 - 8x\n\nUnlock more at Levels: 9, 10, 15, 25 and 35 they receive one Lucky Egg.\nat level 20 two of them, at level 30 three and at level 40 four Lucky Eggs.\n\nDetails: A Lucky Egg is an item that doubles gained XP for 30 minutes. After activating a Lucky Egg, its effect lasts whether the player is online or offline.\n\nThis item cannot be obtained from a PokéStop itself. However, it can be received by reaching certain levels, or by purchasing it from the Shop for PokeCoin 80. A bundle containing eight Lucky Eggs can be purchased for PokeCoin 500 as well. It can be also rewarded for completing set of Special Research tasks.\n\n(Note):  During the events at which Experience Points are being doubled Lucky Eggs still works doubling already doubled XP which results in quadruple XP for a trainer."
                            },
                            StarPiece: {
                                title: "Star Piece",
                                label: "Star Piece",
                                description: ""
                            },
                            LureModule: {
                                title: "Lure Module",
                                label: "Lure Module",
                                description: ""
                            },
                            MagneticModule: {
                                title: "Magnetic Lure Module",
                                label: "Magnetic Lure",
                                description: ""
                            },
                            GlacialModule: {
                                title: "Glacial Lure Module",
                                label: "Glacial Lure",
                                description: ""
                            },
                            MossyModule: {
                                title: "Mossy Lure Module",
                                label: "Mossy Lure",
                                description: ""
                            },
                            RaidPass: {
                                title: "Raid Pass",
                                label: "Raid Pass",
                                description: ""
                            },
                            PremPass: {
                                title: "Premium Raid Pass",
                                label: "Premium Pass",
                                description: ""
                            },
                            EXPass: {
                                title: "EX Raid Pass",
                                label: "EX Pass",
                                description: ""
                            },
                            Camera: {
                                title: "Camera",
                                label: "Camera",
                                description: ""
                            },
                            BagUpgrade: {
                                title: "Bag Upgrade",
                                label: "Bag Upgrade",
                                description: ""
                            },
                            PkmUpgrade: {
                                title: "Pokémon Storage Upgrade",
                                label: "Storage Upgrade",
                                description: ""
                            },
                            TeamMedallion: {
                                title: "Team Medallion",
                                label: "Medallion",
                                description: ""
                            },
                            MysteryBox: {
                                title: "Mystery Box",
                                label: "Mystery Box",
                                description: ""
                            }
                        },
                        pt: {
                            Gift: {
                                title: "Presente",
                                label: "Presente",
                                description: ""
                            },
                            Incense: {
                                title: "Incenso",
                                label: "Incenso",
                                description: ""
                            },
                            LuckyEgg: {
                                title: "Ovo da Sorte",
                                label: "Ovo da Sorte",
                                description: ""
                            },
                            StarPiece: {
                                title: "Pedaço de Estrela",
                                label: "P. Estrela",
                                description: ""
                            },
                            LureModule: {
                                title: "Módulo de Atrair",
                                label: "Mod.Atrair",
                                description: ""
                            },
                            MagneticModule: {
                                title: "Módulo de Atrair Magnético",
                                label: "Mod.Magnético",
                                description: ""
                            },
                            GlacialModule: {
                                title: "Módulo de Atrair Glacial",
                                label: "Mod.Glacial",
                                description: ""
                            },
                            MossyModule: {
                                title: "Módulo de Atrair Musgoso",
                                label: "Mod.Musgoso",
                                description: ""
                            },
                            RaidPass: {
                                title: "Passe de Raide",
                                label: "P. de Raide",
                                description: ""
                            },
                            PremPass: {
                                title: "Passe de Raide Prêmio",
                                label: "P. Prêmmio",
                                description: ""
                            },
                            EXPass: {
                                title: "Passe de Raide EX",
                                label: "P. EX",
                                description: ""
                            },
                            Camera: {
                                title: "Câmera",
                                label: "Câmera",
                                description: ""
                            },
                            BagUpgrade: {
                                title: "Bolsa",
                                label: "Bolsa",
                                description: ""
                            },
                            PkmUpgrade: {
                                title: "Upgrade de Estoque de Pokémon",
                                label: "Estoque Pkm.",
                                description: ""
                            },
                            TeamMedallion: {
                                title: "Medalhão de Equipe",
                                label: "Medalhão",
                                description: ""
                            },
                            MysteryBox: {
                                title: "Caixa Misteriosa",
                                label: "Caixa Misteriosa",
                                description: ""
                            }
                        }
                    }
                }
            }
            case "News": {
                return {
                    en: {
                        header: {
                            news: "News",
                            event: "Events"
                        },
                        modal: {
                            close: "Close"
                        },
                        createdby: "Posted by"
                    },
                    pt: {
                        header: {
                            news: "Notícias",
                            event: "Eventos"
                        },
                        modal: {
                            close: "Fechar"
                        },
                        createdby: "Postado por"
                    },
                }
            }
            case "Contact": {
                return {
                    en: {
                        header: "Contact"
                    },
                    pt: {
                        header: "Contato"
                    }
                }
            }
            case "Guide": {
                return {
                    en: {
                        header: "Guide"
                    },
                    pt: {
                        header: "Guia"
                    }
                }
            }
            case "Login": {
                return {
                    en: {
                        placeholder: "Type your e-mail",
                        Passplaceholder: "**********",
                        labelEmail: "E-mail",
                        labelForget: "Forgot password?"
                    },
                    pt: {
                        placeholder: "Digite seu e-mail",
                        Passplaceholder: "**********",
                        labelEmail: "E-mail",
                        labelForget: "Esqueci minha senha?"
                    }
                }
            }
        }
    }
