export default interface UseCase<E, S> {
  toExecute(input: E): Promise<S>;
}
