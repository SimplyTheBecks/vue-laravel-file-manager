/**
 * Russian translate
 * @type Object
 */
const ru = {
  btn: {
    about: 'О программе',
    back: 'Назад',
    cancel: 'Отменить',
    clear: 'Очистить',
    copy: 'Копировать',
    cut: 'Вырезать',
    delete: 'Удалить',
    edit: 'Редактировать',
    forward: 'Вперед',
    folder: 'Новая папка',
    file: 'Новый файл',
    fullScreen: 'На весь экран',
    grid: 'Сетка',
    paste: 'Вставить',
    refresh: 'Обновить',
    submit: 'Отправить',
    table: 'Таблица',
    upload: 'Загрузить',
    uploadSelect: 'Выбрать файлы',
    hidden: 'Скрытые файлы',
    deleteFile: 'Удалить файл',
  },
  placeholders:{
    search: 'Поиск'
  },
  common:{
    preloader: 'Загрузка'
  },
  clipboard: {
    actionType: 'Тип операции',
    copy: 'Копировать',
    cut: 'Вырезать',
    none: 'Ничего не выбрано',
    title: 'Буфер обмена',
  },
  contextMenu: {
    copy: 'Копировать',
    path: 'Путь',
    cut: 'Вырезать',
    delete: 'Удалить',
    download: 'Скачать',
    info: 'Выбрано:',
    open: 'Открыть',
    paste: 'Вставить',
    properties: 'Свойства',
    rename: 'Переименовать',
    select: 'Выбрать',
    view: 'Просмотр',
    zip: 'Архивировать',
    unzip: 'Разархивировать',
    edit: 'Редактировать',
    audioPlay: 'Воспроизвести',
    videoPlay: 'Воспроизвести',
  },
  info: {
    directories: 'Папок:',
    files: 'Файлов:',
    selected: 'Выбрано:',
    selectedSize: 'Размер:',
    size: 'Размер файлов:',
  },
  manager: {
    table: {
      date: 'Дата',
      folder: 'Папка',
      name: 'Имя',
      size: 'Размер',
      type: 'Тип',
      dirname: 'Директория',
    },
  },
  modal: {
    about: {
      developer: 'Разработчик',
      name: 'Laravel File Manager',
      title: 'О программе',
      version: 'Версия',
    },
    delete: {
      noSelected: 'Ничего не выбрано!',
      title: 'Удалить',
    },
    newFile: {
      fieldName: 'Имя файла',
      fieldFeedback: 'Такой файл уже существует!',
      title: 'Создать новый файл',
    },
    newFolder: {
      fieldName: 'Имя папки',
      fieldFeedback: 'Такакя папка уже существует!',
      title: 'Создать новую папку',
    },
    preview: {
      title: 'Предпросмотр',
    },
    properties: {
      disk: 'Диск',
      modified: 'Изменен',
      name: 'Имя',
      path: 'Путь',
      size: 'Размер',
      title: 'Свойства',
      type: 'Тип',
      url: 'URL',
      access: 'Доступ',
      access_0: 'Нет доступа',
      access_1: 'Только чтение',
      access_2: 'Чтение и Запись',
    },
    rename: {
      directoryExist: 'Папка существует',
      fieldName: 'Введите новое имя',
      fieldFeedback: 'Некорректное имя',
      fileExist: 'Файл существует',
      title: 'Переименовать',
    },
    status: {
      noErrors: 'Ошибок нет!',
      title: 'Состояние',
    },
    upload: {
      ifExist: 'Если файл существует:',
      noSelected: 'Ни одного файла не выбрано!',
      overwrite: 'Перезаписать!',
      selected: 'Выбрано:',
      size: 'Размер:',
      skip: 'Пропустить',
      title: 'Загрузить файлы',
      noAllowFileTypes: 'Расширение файла не входит в список разрешенных для загрузки',
      noMaxUploadFileSize: 'Превышен максимальный размер загружаемого файла',
      noMaxPostSize: 'Превышен максимальный размер загружаемых файлов',
      noMaxFileUploads: 'Превышено максимальное количество загружаемых файлов',
    },
    editor: {
      title: 'Редактор',
    },
    audioPlayer: {
      title: 'Аудиоплеер',
    },
    videoPlayer: {
      title: 'Видеоплеер',
    },
    zip: {
      title: 'Создать архив',
      fieldName: 'Имя архива',
      fieldFeedback: 'Такой файл уже существует!',
    },
    unzip: {
      title: 'Распаковать архив',
      fieldName: 'Имя папки',
      fieldRadioName: 'Извлечь в:',
      fieldRadio1: 'В текущую папку',
      fieldRadio2: 'В новую папку',
      fieldFeedback: 'Папка существует!',
      warning: 'Внимание! При совпадении имен файлы будут перезаписаны!',
    },
    cropper: {
      title: 'Обрезка',
      apply: 'Применить',
      reset: 'Сбросить',
      save: 'Сохранить',
    },
  },
  notifications: {
    cutToClipboard: 'Вырезано!',
    copyToClipboard: 'Скопировано!',
  },
  response: {
    noConfig: 'Конфигурация не найдена!',
    notFound: 'Не найдено!',
    diskNotFound: 'Диск не найден!',
    pathNotFound: 'Путь не существует!',
    diskSelected: 'Диск выбран!',
    // files
    fileExist: 'Файл существует!',
    fileCreated: 'Файл создан!',
    fileUpdated: 'Файл обновлен!',
    fileNotFound: 'Файл не найден!',
    // directories
    dirExist: 'Директория существует!',
    dirCreated: 'Директория создана!',
    dirNotFound: 'Директория не найдена',
    // actions
    uploaded: 'Все файлы загружены!',
    notAllUploaded: 'Не все файлы загружены!',
    delNotFound: 'Не все элементы найдены!',
    deleted: 'Удалено!',
    renamed: 'Переименовано!',
    copied: 'Скопировано!',
    // zip
    zipError: 'Ошибка создания архива!',
    // acl
    aclError: 'В доступе отказано!',
  },
};

export default ru;
