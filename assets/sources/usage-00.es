interface ZoneSpec {
    /**
     * The name of the zone. Usefull when debugging Zones.
     */
    name: string;
    /**
     * A set of properties to be associated with Zone. Use [Zone.get] to retrive them.
     */
    properties?: {
        [key: string]: any;
    };
    /**
     * Allows the interception of zone forking.
     *
     * When the zone is being forked, the request is forwarded to this method for interception.
     *
     * @param parentZoneDelegate Delegate which performs the parent [ZoneSpec] operation.
     * @param currentZone The current [Zone] where the current interceptor has beed declared.
     * @param targetZone The [Zone] which originally received the request.
     * @param zoneSpec The argument passed into the `fork` method.
     */
    onFork?: (parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, zoneSpec: ZoneSpec) => Zone;
    /**
     * Allows interception of the wrapping of the callback.
     *
     * @param parentZoneDelegate Delegate which performs the parent [ZoneSpec] operation.
     * @param currentZone The current [Zone] where the current interceptor has beed declared.
     * @param targetZone The [Zone] which originally received the request.
     * @param delegate The argument passed into the `warp` method.
     * @param source The argument passed into the `warp` method.
     */
    onIntercept?: (parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, delegate: Function, source: string) => Function;
    /**
     * Allows interception of the callback invocation.
     *
     * @param parentZoneDelegate Delegate which performs the parent [ZoneSpec] operation.
     * @param currentZone The current [Zone] where the current interceptor has beed declared.
     * @param targetZone The [Zone] which originally received the request.
     * @param delegate The argument passed into the `run` method.
     * @param applyThis The argument passed into the `run` method.
     * @param applyArgs The argument passed into the `run` method.
     * @param source The argument passed into the `run` method.
     */
    onInvoke?: (parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, delegate: Function, applyThis: any, applyArgs: any[], source: string) => any;
    /**
     * Allows interception of the error handling.
     *
     * @param parentZoneDelegate Delegate which performs the parent [ZoneSpec] operation.
     * @param currentZone The current [Zone] where the current interceptor has beed declared.
     * @param targetZone The [Zone] which originally received the request.
     * @param error The argument passed into the `handleError` method.
     */
    onHandleError?: (parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, error: any) => boolean;
    /**
     * Allows interception of task scheduling.
     *
     * @param parentZoneDelegate Delegate which performs the parent [ZoneSpec] operation.
     * @param currentZone The current [Zone] where the current interceptor has beed declared.
     * @param targetZone The [Zone] which originally received the request.
     * @param task The argument passed into the `scheduleTask` method.
     */
    onScheduleTask?: (parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, task: Task) => Task;
    onInvokeTask?: (parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, task: Task, applyThis: any, applyArgs: any) => any;
    /**
     * Allows interception of task cancelation.
     *
     * @param parentZoneDelegate Delegate which performs the parent [ZoneSpec] operation.
     * @param currentZone The current [Zone] where the current interceptor has beed declared.
     * @param targetZone The [Zone] which originally received the request.
     * @param task The argument passed into the `cancelTask` method.
     */
    onCancelTask?: (parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, task: Task) => any;
    /**
     * Notifies of changes to the task queue empty status.
     *
     * @param parentZoneDelegate Delegate which performs the parent [ZoneSpec] operation.
     * @param currentZone The current [Zone] where the current interceptor has beed declared.
     * @param targetZone The [Zone] which originally received the request.
     * @param isEmpty
     */
    onHasTask?: (delegate: ZoneDelegate, current: Zone, target: Zone, hasTaskState: HasTaskState) => void;
}
