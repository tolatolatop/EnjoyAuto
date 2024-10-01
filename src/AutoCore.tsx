interface Entity {
    id: string;
    properties: Object

    getProperty: (key: string) => any;
    setProperty: (key: string, value: any) => void;
}

interface Document {
    entities: Entity[];

    addEntity: (entity: Entity) => void;
    removeEntity: (entity: Entity) => void;
    getEntity: (id: string) => Entity;
    getEntities: () => Entity[];
}

interface DocumentManager {
    newDcument: () => Document;
    openDocument: (document: Document) => void;
    saveDocument: (document: Document) => void;
    importDocument: (document: Document) => void;
    exportDocument: (document: Document) => void;
}

interface SessionState {
    document: Document;
    state: Object;
}

interface SessionManger {
    getCurrentDocument: () => Document;
    setCurrentDocument: (document: Document) => void;
    getSessionState: () => SessionState;
}

interface Command {
    execute: () => void;
    undo: () => void;
}

interface UndoRedoManager {
    execute: (command: Command) => void;
    undo: () => void;
    redo: () => void;
}

interface Storage {
    save: (key: string, value: any) => void;
    load: (key: string) => any;
}

interface PersistenceManager {
    save: (uid: string, data: Object, storage: Storage) => void;
    load: (uid: string, storage: Storage) => any;
}

interface ACore {
    documentManager: DocumentManager;
    sessionManager: SessionManger;
    undoRedoManager: UndoRedoManager;
    persistenceManager: PersistenceManager;
}

interface UPlugin {
    initialize: (core: ACore) => void;
    destroy: () => void;
}

interface PluginManager {
    registerPlugin: (plugin: UPlugin) => void;
    unregisterPlugin: (plugin: UPlugin) => void;
    getPlugin: (name: string) => UPlugin;
    getPlugins: () => UPlugin[];
}

interface AutoCore extends ACore {
    pluginManager: PluginManager;
}
