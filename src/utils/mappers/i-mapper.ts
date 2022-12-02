/**
 * The below interface aims to be used
 * to create standardized mappers 
 */
export interface IMapper {
    /**
     * Map a provided source data to persistencymodel.
     * 
     * @param from - source of mapping
     * @returns - source into persistency model
     */
    toPersistency?<
        IPersistencyModel = any,
        IDomainEntity = any,
    >(from: IDomainEntity): IPersistencyModel;
    /**
     * Map a provided source data to domain model.
     * 
     * @param from - source of mapping
     * @returns - source into domain model
     */
    toDomain?<
        IDomainEntity = any,
        IPersistencyModel = any,
    >(from: IPersistencyModel): IDomainEntity;
}