initSidebarItems({"enum":[["Error","Errors produced by `Buffer`."]],"struct":[["Buffer","Adds a buffer in front of an inner service."],["DirectServiceRef","An adapter that exposes the associated types of a `DirectService` through `Service`. This type does not let you pretend that a `DirectService` is a `Service`; that would be incorrect, as the caller would then not call `poll_service` and `poll_close` as necessary on the underlying `DirectService`. Instead, it merely provides a type-level adapter which allows types that are generic over `T: Service`, but only need access to associated types of `T`, to also take a `DirectService` ([`Buffer`] is an example of such a type)."],["DirectedService","A wrapper that exposes a `Service` (which does not need to be driven) as a `DirectService` so that a construct that is able to take a `DirectService` can also take instances of `Service`."],["ResponseFuture","Future eventually completed with the response to the original request."],["SpawnError","Error produced when spawning the worker fails"]],"trait":[["WorkerExecutor","This trait allows you to use either Tokio's threaded runtime's executor or the `current_thread` runtime's executor depending on if `T` is `Send` or `!Send`."]],"type":[["DirectBuffer","A [`Buffer`] that is backed by a `DirectService`."]]});