const derechosData = [
    {
        id: 1,
        titulo: "Conocer todos los trámites administrativos",
        descripcion: "Todo paciente tiene derecho a ser informado de manera clara y comprensible sobre los procesos y requisitos necesarios para acceder a los servicios de salud y para realizar cualquier gestión administrativa dentro de la clínica.",
        ejemplo_practico: "Al llegar a la clínica, tienes derecho a que te expliquen qué documentos necesitas, dónde registrarte y cuáles son los pasos para tu consulta o procedimiento."
    },
    {
        id: 2,
        titulo: "Ser informado de todo lo relacionado con su atención",
        descripcion: "Tienes derecho a recibir información completa y detallada sobre tu estado de salud, el diagnóstico, las opciones de tratamiento, los riesgos y beneficios asociados, y cualquier alternativa disponible, de forma que puedas tomar decisiones informadas.",
        ejemplo_practico: "El médico debe explicarte tu diagnóstico, qué medicamentos te recetará, por qué son importantes y qué efectos secundarios podrían tener."
    },
    {
        id: 3,
        titulo: "Recibir atención que salvaguarde su dignidad personal y respete sus valores",
        descripcion: "Tienes derecho a una atención de salud que respete tu individualidad, creencias, cultura y valores personales, garantizando un trato digno y sin discriminación en todo momento.",
        ejemplo_practico: "Debes ser tratado con respeto, sin juicios ni comentarios inapropiados sobre tu persona o tus decisiones."
    },
    {
        id: 4,
        titulo: "Respetar su privacidad, confidencialidad de la información y contar con una historia clínica íntegra, veraz y legible",
        descripcion: "Tu información médica es privada. Tienes derecho a que tus datos personales y clínicos sean tratados con confidencialidad. Además, tu historia clínica debe ser completa, precisa y fácil de entender.",
        ejemplo_practico: "Nadie puede acceder a tu historial médico sin tu consentimiento, y los profesionales deben discutir tu caso en privado."
    },
    {
        id: 5,
        titulo: "Recibir un trato amable, cortés y humano por parte de todo el personal",
        descripcion: "Todo el personal de la clínica, desde la recepción hasta los médicos y enfermeras, debe brindarte un trato respetuoso, empático y humano, reconociendo tu condición de persona que busca ayuda.",
        ejemplo_practico: "El personal debe dirigirse a ti con amabilidad, escuchar tus inquietudes y responder a tus preguntas con paciencia."
    },
    {
        id: 6,
        titulo: "Conocer toda la información sobre la enfermedad, procedimientos y tratamientos",
        descripcion: "Tienes derecho a entender completamente tu enfermedad, los procedimientos diagnósticos o terapéuticos que se te proponen, incluyendo sus propósitos, beneficios, riesgos, alternativas y las consecuencias de no realizarlos.",
        ejemplo_practico: "Antes de una cirugía, el cirujano debe explicarte en detalle cómo se realizará, qué esperar durante la recuperación y los posibles riesgos."
    },
    {
        id: 7,
        titulo: "Ser atendido por personal capacitado",
        descripcion: "Tienes derecho a que la atención médica sea proporcionada por profesionales de la salud debidamente calificados, con la experiencia y el conocimiento necesarios para tu caso.",
        ejemplo_practico: "Puedes esperar que los médicos y enfermeras que te atienden tengan las credenciales y la formación adecuada para sus funciones."
    },
    {
        id: 8,
        titulo: "Recibir prescripción de medicamentos y explicación de vías de administración",
        descripcion: "Tienes derecho a recibir recetas claras de los medicamentos que necesitas, así como instrucciones precisas sobre cómo y cuándo tomarlos, incluyendo la dosis, la vía de administración y la duración del tratamiento.",
        ejemplo_practico: "El farmacéutico o el médico debe explicarte si un medicamento es para tomar por vía oral, inyectado, o aplicado tópicamente, y si debe ser con o sin alimentos."
    },
    {
        id: 9,
        titulo: "Aceptar o rechazar procedimientos dejando constancia escrita",
        descripcion: "Tienes la autonomía para decidir sobre tu propio cuerpo y salud. Puedes aceptar o rechazar cualquier procedimiento, tratamiento o intervención, y tu decisión debe ser respetada y documentada formalmente.",
        ejemplo_practico: "Si un médico te sugiere un tratamiento, tienes derecho a decir 'no' después de entender las implicaciones, y tu decisión debe quedar registrada."
    },
    {
        id: 10,
        titulo: "Recibir atención requerida de acuerdo a sus necesidades",
        descripcion: "Todo paciente tiene derecho a una atención de salud adecuada y oportuna que responda a sus condiciones médicas y necesidades individuales, sin discriminación y con los recursos disponibles de la clínica.",
        ejemplo_practico: "Si necesitas un tipo de atención específica por tu condición, la clínica debe proporcionarla dentro de sus capacidades y posibilidades."
    }
];

const deberesData = [
    {
        id: 1,
        titulo: "Mantener el buen orden y aseo en la institución",
        descripcion: "Es tu deber contribuir al mantenimiento de un ambiente limpio y ordenado en todas las áreas de la clínica, haciendo uso adecuado de las instalaciones y depositando los residuos en los lugares indicados.",
        ejemplo_practico: "Utiliza las papeleras y evita dejar objetos personales o basura tirados en las salas de espera o consultorios."
    },
    {
        id: 2,
        titulo: "Cumplir las normas y actuar de buena fe",
        descripcion: "Debes respetar y seguir las normativas internas de la clínica y las indicaciones del personal de salud, actuando siempre con honestidad y cooperación para el beneficio de tu salud y la de los demás.",
        ejemplo_practico: "Si te piden usar mascarilla en ciertas áreas o seguir un horario de visitas, es tu deber cumplir con esas normas."
    },
    {
        id: 3,
        titulo: "Exponer claramente su estado de salud y la causa de su visita",
        descripcion: "Es tu deber proporcionar información veraz y completa sobre tu historial médico, síntomas y la razón de tu consulta, para que el personal de salud pueda brindarte un diagnóstico y tratamiento adecuados.",
        ejemplo_practico: "Cuando el médico te pregunte sobre tus síntomas, sé lo más específico y honesto posible para ayudarle a entender tu situación."
    },
    {
        id: 4,
        titulo: "Seguir las recomendaciones médicas",
        descripcion: "Para asegurar la efectividad de tu tratamiento y recuperación, es tu deber seguir fielmente las indicaciones y recomendaciones dadas por el personal médico y de enfermería.",
        ejemplo_practico: "Si te indican tomar un medicamento cada 8 horas, es importante que sigas esa pauta y no la modifiques por tu cuenta."
    },
    {
        id: 5,
        titulo: "No solicitar servicios con información engañosa",
        descripcion: "Debes abstenerte de solicitar o acceder a servicios de salud utilizando información falsa, documentos fraudulentos o cualquier tipo de engaño que pueda afectar la atención o los procesos administrativos.",
        ejemplo_practico: "No intentes obtener medicamentos o tratamientos que no te corresponden usando datos incorrectos o falsificando recetas."
    },
    {
        id: 6,
        titulo: "Expresar la información que se solicita para prestar un buen servicio",
        descripcion: "Es tu responsabilidad comunicar cualquier información relevante sobre tu salud, alergias, medicamentos que tomas o cambios en tu estado, que sea necesaria para que el personal te brinde una atención segura y efectiva.",
        ejemplo_practico: "Si eres alérgico a algún medicamento, debes informarlo al personal médico antes de cualquier procedimiento o prescripción."
    },
    {
        id: 7,
        titulo: "Informar de todo acto que afecte a la clínica",
        descripcion: "Tienes el deber de reportar cualquier situación, incidente o comportamiento que observes y que pueda poner en riesgo la seguridad, el orden o el bienestar de la clínica, su personal o los demás pacientes.",
        ejemplo_practico: "Si ves a alguien vandalizando las instalaciones o actuando de forma agresiva, debes informarlo al personal de seguridad o administración."
    },
    {
        id: 8,
        titulo: "Cumplir las citas y requerimientos del personal de salud",
        descripcion: "Es tu deber ser puntual a tus citas y exámenes, y cumplir con los requisitos previos (ayuno, preparación) o posteriores (controles) que el personal de salud te indique para el éxito de tu tratamiento.",
        ejemplo_practico: "Llega a tiempo a tu consulta y, si no puedes asistir, avisa con antelación para que otro paciente pueda usar ese espacio."
    },
    {
        id: 9,
        titulo: "Respetar al personal de salud y a los usuarios",
        descripcion: "Debes dirigirte con respeto y cortesía a todos los profesionales, empleados de la clínica, así como a otros pacientes y sus acompañantes, promoviendo un ambiente de armonía y consideración.",
        ejemplo_practico: "Evita gritar, usar lenguaje ofensivo o tener comportamientos agresivos, incluso si estás frustrado o molesto."
    },
    {
        id: 10,
        titulo: "Brindar un trato amable y digno",
        descripcion: "Es tu deber interactuar con amabilidad, dignidad y consideración hacia todas las personas dentro de la institución, incluyendo al personal, otros pacientes y visitantes.",
        ejemplo_practico: "Saluda al personal, agradece la atención recibida y sé paciente con los demás usuarios en las salas de espera."
    }
];