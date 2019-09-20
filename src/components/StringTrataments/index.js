import { Dimensions, Platform, PixelRatio } from 'react-native';

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
                        }
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
                        }
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
                            capture: "Pokebolas / Frutas",
                            potion: "Poção / Reviver",
                            egg: "Ovos / Incubadoras",
                            lvlup: "Itens de Evolução",
                            other: "Outros Itens"
                        },
                        modal: {
                            close: "Fechar"
                        }
                    }, 
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
            case "Help": {
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
